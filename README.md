# To-Do-List

This is an application I created using Firebase which is Google's mobile and web app development platform. 
The application is a To Do List where you can add tasks that need completed, and the app will list them for you below. Once a task is completed you may tap the task and it will be deleted.

I learned how to import functions from Firebase using the import function, and how to conect the JavaScript to the imported information using the id type "module"

I learned how to use the initializeApp function from firebase which let me use the databaseURL to initialize the app so I have an app object to work with.

I learned how to use the getDataBase function. I created a database object and set the getDataBase function to grab the app object which was just created.

Next, I learned to use the refrence function. In a firebase realtime database everything is a reference, so i created a "toDoList" reference where all of the tasks will be saved.

Afterwards, I used the push function from firebase to push an input value to the reference database.

Lastly, I learned to call the onValue function. This function listens for changes in the database and whenver the change happens, it creates a new snapshot and reruns the funciton all over again.

Unique ID:
And in order to have a realtime databse and readily delete new information, i learned that everything needs a unique ID. WIth the unique ID i imported the remove function which would let me delete a specific item in the database.

More information I learned, and touched up on my skills included learning how to tranform Object into Arrays inorder to write a forloop on an array. 

I learned how to use createELement instead of innerHTML in order to create list elements for the ID and Values of array in which i use this to remove them from the database.

I learned how to limit user access in highlighting images and text on the webpage by using "user-select: none;" which will help stop them from unintenionally selecting parts of the app.

Also, I learned how to set the viewport in the HTML so the width of the app would fit all types of mobile devices, and look presentable in all of them.

I used Favicon to create a small image in the title headbar for the webpage

Finally I learned how to edit the webmanifest file which helps make it possible so the web application looks like a native mobile application on our phones. 


