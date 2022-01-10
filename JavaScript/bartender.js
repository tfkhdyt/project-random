const yourDrink = 'Coffee'
const reverse = (s) => s.split('').reverse().join('')
const bartender = {
  str1: 'ers',
  str2: reverse('rap'),
  str3: 'amet',
  request: function (preference) {
    return `${preference}. Secret word: ${this.str2}${this.str3}${this.str1}`
  }
}

const x = bartender.request(yourDrink)
console.log(x)
