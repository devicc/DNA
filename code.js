// Returns a random DNA base
//--------------------------
const getRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
//---------------------------------------------------------
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(getRandBase())
  }
  return newStrand
}

function pAequorFactory(number, basesArray) {
  return {
    specimenNum: number,
    dna: basesArray,
  
//mutate() randomly selects a base in the object's DNA property and changes it to a different one
//-----------------------------------------------------------------------------------------------
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length)
      const oldBase = this.dna[randomIndex]
      let newBase = getRandBase()
      while (newBase === oldBase) {
      newBase = getRandBase()
      }
      return this.dna[randomIndex] = newBase
    },

//compareDNA() compares the current specimen's DNA with another one and logs the percentage of DNA that both specimens have in common. It's only considered a match if the same base is found in the same place.
//--------------------------------------------------------------------------------------------
    compareDNA(specimen) {
      let matches = 0
      this.dna.forEach((element, currentIndex) => {
        if (element === specimen.dna[currentIndex]) {
          matches++
          console.log(`${this.dna[currentIndex]} matches ${specimen.dna[currentIndex]} at ${currentIndex}`)
          }
      })
      if (matches > 0) {
        console.log (`Specimens have ${Math.floor((matches / this.dna.length) * 100)}% DNA in common.`)
      } else {
          console.log("No matches were found.")
          console.log ("Specimens don't have DNA in common.")
      }
    },

    willLikelySurvive() {
      //TODO
    }
  }
}

//Test
//----
pAequorFactory(1, mockUpStrand()).compareDNA(pAequorFactory(2, mockUpStrand()))
