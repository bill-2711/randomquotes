let btn = document.getElementById("btn")
let quotes = document.getElementById("quotes")
let speaker = document.getElementById("speaker")

const newArray = [{
    quotes: `"Be humble and ready to learn"`,
    speaker: "Mr. Joel"
},{
      quotes:  `"Be a serious student"` ,
    speaker:  "Mr. Alex" 
},{
      quotes: `"You need to learn"`,
    speaker: "Sr. Charles"
}]


btn.addEventListener("click",function() {
    let randomQuotes = Math.floor(Math.random() * newArray.length) 
    quotes.innerText = newArray[randomQuotes].quotes
    speaker.innerText = newArray[randomQuotes].speaker
    console.log(quotes, speaker)
})
// console.log(randomQuotes)