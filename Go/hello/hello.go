package main

import (
  "fmt"
  "log"
  "example.com/greetings"
)
// import "rsc.io/quote"

func main() {
  // fmt.Println(quote.Go())
  log.SetPrefix("greetings: ")
  log.SetFlags(0)

  // A slice of names.
  names := []string{"Taufik", "Fahrul", "Defit"}

  message, err := greetings.Hellos(names)

  if err != nil {
    log.Fatal(err)
  }
  fmt.Println(message)
}
