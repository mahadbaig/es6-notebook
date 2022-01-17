var noteTitle = document.getElementById("title-btn")
var noteDescription = document.getElementById("descr-btn")
var cards = document.getElementById("cards-to-be-added")


let addnote = () => {

    if (noteTitle.value === "" && noteDescription.value === "") {
        alert("The Title or Description is incorrect or empty!")
    } else {
        var newNoteCard = document.createElement('div')
        newNoteCard.classList.add("card")
        newNoteCard.classList.add("card-custom")
        newNoteCard.style = "width: 18rem"
        console.log(newNoteCard)

        var cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        var newTitle = document.createElement("h5")
        newTitle.innerText = noteTitle.value
        newTitle.classList.add("card-title")
        newNoteCard.appendChild(newTitle)
        noteTitle.value = ""

        var newDescription = document.createElement("p")
        newDescription.innerText = noteDescription.value
        newDescription.classList.add("card-text")
        newNoteCard.appendChild(newDescription)
        noteDescription.value = ""

        var deleteBtn = document.createElement("a")
        deleteBtn.innerHTML = "<i class = 'fas fa-minus-circle'></i>"
        deleteBtn.classList.add("myButton")
        newNoteCard.appendChild(deleteBtn)

        var completedBtn = document.createElement("a")
        completedBtn.innerHTML = "<i class = 'fas fa-check'></i>"
        completedBtn.classList.add("myButton")
        newNoteCard.appendChild(completedBtn)

        var buttonsDiv = document.createElement("div")
        buttonsDiv.appendChild(deleteBtn)
        buttonsDiv.appendChild(completedBtn)
        newNoteCard.appendChild(buttonsDiv)

        cards.appendChild(newNoteCard)


        deleteBtn.addEventListener("click",  () => {
            cards.removeChild(newNoteCard)
        })

        completedBtn.addEventListener("click", () => {
            newTitle.classList.add("task-completed")
            newDescription.classList.add("task-completed")

        })

    }


}

let delAll = () => {
    cards.innerHTML = ""
}