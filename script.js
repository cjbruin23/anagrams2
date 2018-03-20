anagramSets = {

}

function alphabetize(a) {
   return a.toLowerCase().split("").sort().join("").trim();
};

function placeWordsIntoSets() {
   for (i = 0; i < words.length; i++) {
      if (anagramSets.hasOwnProperty(alphabetize(words[i]))) {
         let addValue = alphabetize(words[i]);
         anagramSets[addValue].push(words[i]);
      } else {
         let newProperty = alphabetize(words[i]);
         anagramSets[newProperty] = [words[i]];
      };
   };
   placeWordsIntoDom();
}


function placeWordsIntoDom() {
   const toPlace = document.getElementById('topDiv');
   for (let property in anagramSets) {
      if (anagramSets.hasOwnProperty(property) && anagramSets[property].length >= 5) {
         const newDiv = document.createElement('div');
         let anagIdentify = document.createTextNode(property+': ');
         newDiv.append(anagIdentify);
            for (let i = 0; i < anagramSets[property].length; i++) {
               let newTextNode = document.createTextNode(anagramSets[property][i] + ' ');
               newDiv.appendChild(newTextNode);
            }
            toPlace.appendChild(newDiv);
         }
      }
}

placeWordsIntoSets();

// Loop through the words in words.js
// Put them through the aplhabetize function and see what they return
// Say if the alphabetized KEY is not in anagramSets, put it in there
   // Then put the original word as a value
// If the alphabetized KEY is already in the anagramSets, just add the original word
