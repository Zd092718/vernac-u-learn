
// creates El for button and definition
var btnEl = document.getElementById('btn')
var resultsReturnEl = document.getElementById('results-return');
var resultsListEl = $('#results-list')

// on click, hides button and shows definition
btnEl.addEventListener('click', showDefinition)
function showDefinition(e){
    e.preventDefault()
    btn.classList.add('hide')
    resultsReturnEl.classList.remove('hide');
    generateData();
}

// api fetch
function generateData(){
  //random word find
var apiKey = `hqt5u78p7wuevhy07jgydyr9ize5b0yt1x4zf5gg5p65hvh1t`
var randomWord = `http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=${apiKey}`
fetch(randomWord)
.then(response => {
    	if(!response.ok){
            throw response.json();
        }
        return response.json();
    })
.then(genRando => {
  //random word dictionary data
    console.log(genRando)
    var word = genRando.word.split('-')[0];
    // var dictApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    var linguaApi = `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${word}`
    fetch(linguaApi, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3fc93a864fmsha6eb4d6d234e809p1d678fjsn6ae16889f063",
        "x-rapidapi-host": "lingua-robot.p.rapidapi.com"
    }
    })
	  .then (response =>{
          if(!response.ok){
        throw response.json();
    }
    return response.json()
    })
    .then(dictData => {
        console.log(dictData)
        console.log(word)
      
          var partOfSpeech = dictData.entries[0].interpretations[0].partOfSpeech; 

          switch (partOfSpeech){
              case 'noun' : 
          document.body.style.backgroundColor = 'red'
            break;
              case 'verb' :
          document.body.style.backgroundColor = 'green'
          break;            
              case 'adverb' :
          document.body.style.backgroundColor = 'brown'
          break;            
              case 'pronoun' :
          document.body.style.backgroundColor = 'lemonchiffon'
          break;            
              case 'adjective' :
          document.body.style.backgroundColor = 'darkslateblue' 
          break;           
              case 'article' :
          document.body.style.backgroundColor = 'periwinke'
          break;            
              case 'preposition' :
          document.body.style.backgroundColor = 'white' 
          break;           
              case 'conjunction' :
          document.body.style.backgroundColor = 'orange' 
          break;           
          };

          var wordEl = dictData.entries[0].entry;
          var wordPrint = document.createElement('li');
          wordPrint.classList.add('wordItem');
          wordPrint.textContent = wordEl;
          resultsListEl.append(wordPrint)
          var definition = dictData.entries[0].lexemes[0].senses[0].definition;
          var defPrint = document.createElement('li');
          defPrint.classList.add('defItem');
          defPrint.textContent = definition;
          resultsListEl.append(defPrint);
    })
})};




    //color link changes
    // will need to redefine parts of speech variable to match data from api
    // will need to change colors of background to what you wants


