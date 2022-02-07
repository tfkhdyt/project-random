package greetings

import (
  "testing"
  "regexp"
)

func TestHelloName(t *testing.T) {
  name := "Taufik"
  want := regexp.MustCompile(`\b` + name + `\b`)
  msg, err := Hello("Taufik")
  if !want.MatchString(msg) || err != nil {
    t.Fatalf(`Hello("Taufik") = %q, %v want match for %#q, nil`, msg, err, want)
  }
}

// TestHelloEmpty calls greetings.Hello with an empty string,
// checking for an error.
func TestHelloEmpty(t *testing.T) {
    msg, err := Hello("")
    if msg != "" || err == nil {
        t.Fatalf(`Hello("") = %q, %v, want "", error`, msg, err)
    }
}
