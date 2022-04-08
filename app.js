function converter(sentence){
    let capitalized = []
    let words = sentence.split(" ") //split the sentence into words
    words.forEach(word => { 
        let capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1) //capitalize the first letter of every word
        capitalized.push(capitalizedWord)         
    })
    let converted = capitalized.join(" ") 
    return converted
}

function genUniqueUsername(nameUser) {
    let naming = nameUser
      const listUserName = []
  
    let recomFirst = true
    let recomSecond = true
    let recomThird = true
    
    const n = naming.length > 15 ? 15 : naming.length
    if (n > 15) naming = naming.slice(0,15)
  
    
    let name =  naming.split('')
    let name2 = naming.split('')
    let name3 = naming.split('')
    
  
    function generateRandomInteger(total) {
      let limit = 20 - total
      let digit = ''
  
      for(let i = 0; i < limit; i++){
        let unit = Math.floor(Math.random() * limit);
        digit += unit
      }
  
      return digit
    }      
  
    for (let h = 0; h < 3; h++){
  
        if (recomFirst){
            recomFirst = false           
            const nameJoined = name.join('').replace(/\s/g, '').toLowerCase()
            listUserName.push(nameJoined) 
        }
  
        if (recomSecond){
            recomSecond = false
            const nameJoined = name2.join('').replace(/\s+/g, '').toLowerCase()
            const num = generateRandomInteger(n)   
            const nameJoinedWithNum = nameJoined + num 
            listUserName.push(nameJoinedWithNum)
        }
  
        if (recomThird){
            recomThird = false
            const nameJoined = name3.join('').replace(/\s+/g, '_').toLowerCase()
            const num = generateRandomInteger(n)   
            const nameJoinedWithNum = nameJoined + num 
            listUserName.push(nameJoinedWithNum)
        }
    }
    
    return listUserName
  }

module.exports = {
    converter,
    genUniqueUsername
}


