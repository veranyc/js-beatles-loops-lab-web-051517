

function theBeatlesPlay(musicians, instruments) {
  let beatlesArray = []

  for (var i = 0; i < musicians.length; i++) {
    let beatlesSentence = `${musicians[i]} plays ${instruments[i]}`
    beatlesArray.push(beatlesSentence)
  }
  return beatlesArray
}




function johnLennonFacts(facts) {
  let johnFactArray = []
  let i = 0
  while (i < facts.length ) {
    let johnFact = `${facts[i]}!!!`
    johnFactArray.push(johnFact)
    i++
    debugger
  }
  return johnFactArray
}


function iLoveTheBeatles(number) {
  let beatlesArray = []
  do {
    let love = "I love the Beatles!"
    beatlesArray.push(love)
    number++
    } while (number < 15)
  return beatlesArray
}
