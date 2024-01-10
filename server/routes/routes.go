package routes

import (
	"sachin/server/handlers"
	"github.com/gin-gonic/gin"
)

func InitializeRoutes(r *gin.Engine) {

	// Register route
	r.POST("/register", handlers.Register)

	//Login route
	r.POST("/login", handlers.LoginIn)

	// OAuth route
	r.POST("/auth/google/callback", handlers.OAuth)
}