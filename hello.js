const print = async (str) => {
  return new Promise((resolve, reject) => {
    console.log(str)
    resolve()
  })
}

for (let i = 0; i < 4000; i++) {
  print(`Halo ke ${i + 1}`)
    .then(() => { continue })
}
