import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())


        clearToDoListEl()

        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0];
            let currentItemValue = currentItem[1]

            appendToDoListEl(currentItem)
        }
    } else {
        toDoListEl.innerHTML = "<span class ='nothing'>There is currently no task available.. </span>"
    }
})

function clearToDoListEl() {
    toDoListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendToDoListEl(task) {
    // toDoListEl.innerHTML += `<li> ${itemValue} </li>`
    let taskID = task[0]
    let taskValue = task[1]

    let newEl = document.createElement("li")

    newEl.textContent = taskValue

    newEl.addEventListener("click", function() {
        let exactLocationOfTaskInDB = ref(database, `toDoList/${taskID}`);
        remove(exactLocationOfTaskInDB);
    })

    toDoListEl.append(newEl)
}