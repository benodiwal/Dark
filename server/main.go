package main

import (
	"log"
	"os"
	"sachin/server/middlewares"
	"sachin/server/models"
	"sachin/server/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {

	err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }

	port := os.Getenv("PORT")
    if port == "" {
        log.Fatal("PORT environment variable is not set")
    }	

	// Connecting database
	models.ConnectDatabase()

	// Initialize router
	r := gin.Default()

	// use CORS middleware
	r.Use(cors.Default())

	// Logger middleware
	r.Use(middlewares.LoggerMiddleware())

	// Initialize routes
	routes.InitializeRoutes(r)

	// Starting server on port 3000
	r.Run(":" + port)
}
