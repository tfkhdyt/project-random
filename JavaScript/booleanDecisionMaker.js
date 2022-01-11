let result = { true: 0, false: 0 }

const generateResult = (result) => {
  for (let i = 0; i < 100; i++) {
    const decision = Math.round(Math.random())
    if (decision === 1) {
      result = {
        ...result,
        true: result.true + 1
      }
    } else if (decision === 0) {
      result = {
        ...result,
        false: result.false + 1
      }
    }
  }
  return result
}

const getDecision = (result) => {
  if (result.true > result.false)
    return true
  else if (result.true < result.false)
    return false
}

while (true) {
  const tempResult = generateResult(result) 
  // const decision = getDecision(result)
  console.log(`True  : ${result.true}
False : ${result.false}`)
  break
}

