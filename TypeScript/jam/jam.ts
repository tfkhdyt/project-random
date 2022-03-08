const date = new Date()

const getTime = (): string => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${hour}:${minute}:${second}`
}

while (true) {
    console.clear()
    console.log(getTime())
}
