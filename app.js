import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://to-do-list-f4276-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app)
const toDoListInDB = ref(database, "toDoList")

let inputFieldEl = document.getElementById("input-field");
let addButtonEl = document.getElementById("add-button");
let toDoListEl = document.getElementById("to-do-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value;

    push(toDoListInDB, inputValue);

    clearInputFieldEl()
})

onValue(toDoListInDB, function(snapshot) {
    let itemsArray = Object.values(snapshot.val())

    clearToDoListEl()

    for (let i = 0; i < itemsArray.length; i++)
    appendToDoListEl(itemsArray[i])
})

function clearToDoListEl() {
    toDoListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendToDoListEl(itemValue) {
    toDoListEl.innerHTML += `<li> ${itemValue} </li>`
}