package main

import (
	"fmt"
	"strings"
)

func main() {
	str := "Triyank jain"
	q := strings.Split(str, " ")
	fmt.Println(q)
	//arr := [13]string{}
	for _, val := range q {
		for _, value := range val {
			fmt.Println(value)
		}
	}
	// arr[len(q)-i] = val
	// fmt.Println(arr)

	// for

}
