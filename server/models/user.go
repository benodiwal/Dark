package models

import (
	"fmt"
	"html"
	"strings"

	"sachin/server/utils"

	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	gorm.Model
	Email    string `gorm:"type:varchar(100);unique_index;not null" json:"email"`
	Username string `gorm:"size:255;not null;unique" json:"username"`
	Password string `gorm:"size:255;not null" json:"password"`
}

func verifyPassword(password, hashedPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(password), []byte(hashedPassword))
}

func LoginCheck(email string, password string) (string, error) {
	
	var err error

	u := User {}
	err = DB.Model(User {}).Where("email = ?", email).Take(&u).Error

	if err != nil {
		return "", err
	}

	err = verifyPassword(password, u.Password)

	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return "", err
	}

	token, err  := utils.GenerateToken(u.ID)

	if err != nil {
		return "", err
	}

	return token, nil
}

func (u *User) SaveUser() (*User, error) {
	var err error
	err = DB.Create(&u).Error
	if err != nil {
		return &User{}, err
	}
	return u, err
}

func (u *User) BeforeSave() error { 
	// converting password to hash
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)

	if err != nil {
		return err
	}

	u.Password = string(hashedPassword)
	u.Username = html.EscapeString(strings.TrimSpace(u.Username))

	return nil
}

func GetUserName(email string) string {
	var user User
	if err := DB.Where("email = ?", email).First(&user).Error; err != nil {
		fmt.Println("User not found with the email: ", email)
		return ""
	}
	return user.Username 
}