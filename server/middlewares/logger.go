package middlewares

import (
	"log"
	"time"
	"github.com/gin-gonic/gin"
)

func LoggerMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		
		// Timer start
		start := time.Now()

		// Process Request
		ctx.Next()

		// Stop timer
		end := time.Now()
		latency := end.Sub(start)

		// Request details
		status := ctx.Writer.Status()
		clientIP := ctx.ClientIP()
		method := ctx.Request.Method

		// Log details
		log.Printf("[GIN] %v | %3d | %12v | %s | %-7s %s\n",
			end.Format("2006/01/02 - 15:04:05"),
			status,
			latency,
			clientIP,
			method,
			ctx.Request.URL.Path,
		)
		  
	}
}