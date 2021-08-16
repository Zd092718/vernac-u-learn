var dictApi = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`
var linguaApi = `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/hello`
fetch(linguaApi, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3fc93a864fmsha6eb4d6d234e809p1d678fjsn6ae16889f063",
		"x-rapidapi-host": "lingua-robot.p.rapidapi.com"
	}
})
.then(response => {
	if(!response.ok){
        throw response.json();
    }
    return response.json()
})
.then(linguaData => {
    console.log(linguaData)
})




fetch(dictApi)
    .then(response => {
        if(!response.ok){
            throw response.json();
        }
        return response.json();
    })
    .then(dictData => {
        console.log(dictData)
    });
