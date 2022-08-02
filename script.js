
// pseudo-code:
// create a list of names to draw from 
const nameArray = ["Rosie", "Bubbles", "Cheddar", "Fishbait", "Jiggles", "Katy Purry", "Kit-Kat", "Meowise", "Puddy Tat", "Skimbleshanks", "Sushi", "Bacon", "Baloo", "Boots", "Bubbles", "Burrito", "Buttons", "Cat Benatar", "Catzilla", "Cha Cha", "Cheddar", "Cheerio", "Cindy Clawford", "Clawdia", "Fishbait", "Frodo", "Hobbes", "Jelly", "Jennifurr", "Kermit", "Marshmallow", "Meatball", "Meowsie", "Miss Piggy", "Muffin", "Nugget", "Opie", "Pikachu", "Porkchop", "Porky", "Puddy Tat", "Purrito", "Quimby", "Rambo", "Ramen", "Ricky Ticky Tabby", "Seuss", "Sriracha", "Stitch", "Sushi", "Tink", "Turbo", "Twinky", "Wasabi", "Yeti"]

// on button click genarate random number based on the array length
const randomChoice = function() {
    let randomNumber = Math.floor(Math.random() * nameArray.length );
      
    var randomName = nameArray[randomNumber];
    console.log(randomName);
    // display name above "get name" button  & replace name text with randomName generated 
    $("#name").text(randomName);         
};


// link index number to random number ganerated
// on click log clicked 
$("button").on("click", function() {
    randomChoice();     
    const audio = new Audio("./audio_06.mp3");
    audio.play();       
});


    
