//const variables
const exhbitTitle = document.getElementById("exhibit-title")
const ticketsBought = document.getElementById("tickets-bought")
const exhbitImage = document.getElementById("exhibit-image")
const exhbitDescription = document.getElementById("exhibit-description")
const exhbitComments = document.getElementById("comments-section")

//DELIVERABLE ONE
//Get fetch and fetch data
//Grab the exhbit
//Add exhbit details to areas that make sense
//FOR EACH comments in exhbit add to the comments-section with p element
fetch("http://localhost:3000/current-exhibits")
.then(response => response.json())
.then(data => {
    const firstExhibit = data[0];
    exhbitTitle.textContent = firstExhibit.title;
    exhbitImage.src = firstExhibit.image;
    exhbitDescription.textContent = firstExhibit.description    
    
//This next piece of code grabs the data in db.json
//Makes for each loop going through each comment in db.json
//This goes into a function and returns showComment which is a function
    firstExhibit["comments"].forEach((eachComment) => {
        showComment(eachComment)
    })
})

//This function creates an empty p
//Next we are filling each p with eachComment
//Next we are appending each p with details of it into exhbitComments
function showComment(eachComment) {
    let newEmptyComment = document.createElement("p")
    newEmptyComment.textContent = eachComment
    exhbitComments.appendChild(newEmptyComment)
}

//DELIVERABLE TWO
//Every submitted comment gets added to the comments-section with p element
const commentButton = document.getElementById("comment-form")

let newComment = " "
commentButton.addEventListener("submit", e => {
    e.preventDefault()
    newComment = e.target["comment-input"].value
    showComment(newComment)
})


//DELIVERABLE THREE
//Clicking buy-tickets button updates it and increments the number of tickets
//Keep text when clicking button so it says "1 Tickets Bought.
//const ticketsBought = document.getElementById("tickets-bought")
const ticketsButton = document.getElementById("buy-tickets-button")

ticketsButton.addEventListener("click", e => {
    const newNum = parseInt(ticketsBought.textContent) + 1
    ticketsBought.textContent = newNum + " Tickets Bought "
})