package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"sachin/server/models"
	"sachin/server/utils"

	"github.com/gin-gonic/gin"
	_ "golang.org/x/oauth2"
)

type RegisterInput struct {
	Username string `json:"username" binding:"required"`
	Email string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type LoginInput struct {
	Email string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func LoginIn(ctx *gin.Context) {
	
	var input LoginInput

	if err := ctx.ShouldBindJSON(&input); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H {
			"error": err.Error(),
		})
	}

	u := models.User{}

	u.Email = input.Email
	u.Password = input.Password
	u.Username = models.GetUserName(u.Email);

	token, err := models.LoginCheck(u.Email, u.Password)

	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H {
			"error": "username or password is incorrect",
		})
		return
	}

	ctx.JSON(http.StatusOK, gin.H {
		"token": token,
		"user": u,
	})
}

func Register(ctx *gin.Context) {

	var input RegisterInput

	if err := ctx.ShouldBindJSON(&input); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H {
			"error": err.Error(),
		})
		return
	}

	u := models.User {}

	u.Email = input.Email
	u.Username = input.Username
	u.Password = input.Password

	_, err := u.SaveUser()

	if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H {
				"error": err.Error(),
			})
			return 
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "registration success",
	})

}

func OAuth(ctx *gin.Context) {
	
	var request struct {
		Token string `json:"accessToken"`
	}

	if err := ctx.BindJSON(&request); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	apiURL := "https://people.googleapis.com/v1/people/me"
	params := url.Values{}
	params.Add("personFields", "names,emailAddresses,photos")

	apiURLWithParams := fmt.Sprintf("%s?%s", apiURL, params.Encode())

	req, err := http.NewRequest("GET", apiURLWithParams, nil)
	if err != nil {
		fmt.Println("Error creating request: ", err)
		ctx.JSON(http.StatusInternalServerError, gin.H {"error": "Internal Server Error"})
		return
	}

	token := fmt.Sprintf("Bearer %s", request.Token)
	req.Header.Set("Authorization", token)

	client := &http.Client{}
	res, err := client.Do(req)

	if err != nil {
		fmt.Println("Error making request: ", err)
		ctx.JSON(http.StatusInternalServerError, gin.H {"error": "Internal Server Error"})
		return
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		ctx.JSON(http.StatusInternalServerError, gin.H {"error": "Internal Server Error"})
		return
	}

	var data map[string]interface{}

	err = json.Unmarshal([]byte(string(body)), &data)
	if err != nil {
		fmt.Println("Error parsing JSON: ", err)
		ctx.JSON(http.StatusInternalServerError, gin.H {"error": "Internal Server Error"})
		return
	}

	emails, ok := data["emailAddresses"].([]interface{})
	if !ok || len(emails) == 0 {
		ctx.JSON(http.StatusInternalServerError, gin.H {"error": "Email not found in response"})
		return
	}

	var existingUser models.User
	result := models.DB.Where("email = ?", emails[0].(map[string]interface{})["value"]).First(&existingUser)

	if result.Error == nil {
		// User exists, return the existing user
		token, err := utils.GenerateToken(existingUser.ID)
		if err != nil {
			fmt.Println("Error generating token: ", err)
			ctx.JSON(http.StatusInternalServerError, gin.H {"error": "Internal Server Error"})
			return
		}
		ctx.JSON(http.StatusOK, gin.H {
			"token": token,
			"user": existingUser,
		})
		return
	}
	
	newUser := models.User{}
	newUser.Email = emails[0].(map[string]interface{})["value"].(string)
	newUser.Password = ""
	newUser.Username = ""

	_, err = newUser.SaveUser()

	if err != nil {
            fmt.Println("Error saving user: ", err)	
			ctx.JSON(http.StatusInternalServerError, gin.H {"error": "Internal Server Error"})
			return 
	}

	token, err = utils.GenerateToken(existingUser.ID)
	if err != nil {
			fmt.Println("Error generating token: ", err)
			ctx.JSON(http.StatusInternalServerError, gin.H {"error": "Internal Server Error"})
			return
		}
	ctx.JSON(http.StatusOK, gin.H {
			"token": token,
			"user": existingUser,
		})

}