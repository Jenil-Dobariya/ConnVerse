package middleware

import (
	"context"
	"errors"
	"fmt"
	"github.com/Naman-K-Jaiswal/ConnVerse/database"
	"github.com/Naman-K-Jaiswal/ConnVerse/profile"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"net/http"
	"os"
	"time"
)

type temp struct {
	RequesterId string `json:"requesterid"`
}

func CRUDAuth(c *gin.Context) {
	tokenStr, err := c.Cookie("Authorization")
	if err != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(os.Getenv("SECRET")), nil
	})

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		if claims["exp"].(float64) < float64(time.Now().Unix()) {
			c.AbortWithStatus(http.StatusUnauthorized)
		}

		var temp temp
		err := c.ShouldBindJSON(&temp)
		if err != nil {
			c.AbortWithStatus(http.StatusUnauthorized)
		}

		collection := database.DB.Collection("Users")
		ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()

		var user profile.User
		err = collection.FindOne(ctx, bson.M{"email": claims["sub"]}).Decode(&user)
		if err != nil {
			c.AbortWithStatus(http.StatusUnauthorized)
		} else {
			if errors.Is(err, mongo.ErrNoDocuments) {
				c.AbortWithStatus(http.StatusUnauthorized)
			}
		}

		if user.UserID != temp.RequesterId {
			c.AbortWithStatus(http.StatusUnauthorized)
		}

		c.Next()
	} else {
		c.AbortWithStatus(http.StatusUnauthorized)
	}
}
