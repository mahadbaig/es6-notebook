let noteTitle = document.getElementById("title-btn")
let noteDescription = document.getElementById("descr-btn")
let cards = document.getElementById("cards-to-be-added")
let newNote = document.getElementById("addbtn")
let delNote = document.getElementById("deletebtn")


newNote.addEventListener('click' , () => {

    if (noteTitle.value === "" && noteDescription.value === "") {
        alert("The Title or Description is incorrect or empty!")
    } else {
        let newNoteCard = document.createElement('div')
        newNoteCard.classList.add("card")
        newNoteCard.classList.add("card-custom")
        newNoteCard.style = "width: 18rem"
        console.log(newNoteCard)

        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        let newTitle = document.createElement("h5")
        newTitle.innerText = noteTitle.value
        newTitle.classList.add("card-title")
        newNoteCard.appendChild(newTitle)
        noteTitle.value = ""

        let newDescription = document.createElement("p")
        newDescription.innerText = noteDescription.value
        newDescription.classList.add("card-text")
        newNoteCard.appendChild(newDescription)
        noteDescription.value = ""

        let deleteBtn = document.createElement("a")
        deleteBtn.innerHTML = "<i class = 'fas fa-minus-circle'>Delete</i>"
        deleteBtn.style.textDecoration = "none"
        deleteBtn.style.color = "black"
        deleteBtn.style.borderBottom = "2px solid black"
        deleteBtn.style.margin = "5px"
        deleteBtn.style.cursor = "pointer"
        newNoteCard.appendChild(deleteBtn)

        let completedBtn = document.createElement("a")
        completedBtn.innerHTML = "<i class = 'fas fa-check'>Completed</i>"
        completedBtn.style.textDecoration = "none"
        completedBtn.style.color = "black"
        completedBtn.style.borderBottom = "2px solid black"
        completedBtn.style.margin = "5px"
        completedBtn.style.cursor = "pointer"
        newNoteCard.appendChild(completedBtn)

        let buttonsDiv = document.createElement("div")
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


} ) 

delNote.addEventListener ('click', () => {
    cards.innerHTML = ""
})