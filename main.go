package main

import (
	"fmt"
)

func main() {
	a := calc(10, 0, "/")
	fmt.Println(a)
}

func calc(a int, b int, c string) int {
	switch {
	case c == "+":
		return a + b
	case c == "-":
		return a - b
	case c == "*":
		return a * b
	case c == "/":
		if b == 0 {
			fmt.Println("Por zero n pod")
		} else {
			return a / b
		}
	}
	return 0
}
