// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItems); //targeting the <ul> where our todo items(newTodo) are being stored as list items.
// Functions

function addTodo(event)
{
    // Prevent form from submitting automatically
    event.preventDefault();

    // Todo div
    const todoDiv = document.createElement("div"); // creates an <div> element
    todoDiv.classList.add("todo"); // adds a class name "todo" to the <div>

    // Create list elements
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; // to store the user input value ( everytime we press + button, the value inside the text input will be saved to our inner text of new to-do list)
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); // appends newTodo to todoDiv

    // Completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>"; // adds inner HTML element to the completed button
    completedButton.classList.add("complete-btn"); // Adding class name
    todoDiv.appendChild(completedButton); // appends completed button inside todoDiv

    // Deleted button
    const deletedButton = document.createElement("button");
    deletedButton.innerHTML = "<i class='fas fa-trash'></i>"; // adds inner HTML element to the deleted button
    deletedButton.classList.add("delete-btn"); //adding class name
    todoDiv.appendChild(deletedButton); // appends deleted button inside todoDiv

    // Append to the main div -> todo-list
    todoList.appendChild(todoDiv);

    // Clear to-do input value
    todoInput.value=""; //to clear the input field after the value of new list gets stored.

    // What we are doing(Whenever we click the + button):
    // 1. Creating a todoDiv ( main div)
    // 2. Creating an <li></li> to add the list items (todo-item)
    // 3. Creating two button elements - delete and complete.
    // 4. Appended <li> and <button> to the main todoDiv
    // 5. Appended todoDiv to the parent HTML div todo-list 

}

function deleteItems(e)
{
    const item = e.target; // whatever we are clickig on is the target ( event.target)

    //if the button is Delete Check
    if(item.classList[0] === "delete-btn")
    {
        const todo = item.parentElement; // to target the parent element of the item const i.e: The todo item (li)
        // when the Animation ends, we remove the item
        // trasnsitionend - wait and execute only when the transition gets completed
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();  // after the transition ( fall ) ends, we will remove that item.
        });
    }

    //if the button pressed is Complete Check
    if(item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement; // to target the parent element of the item const i.e: The todo item (li)
        todo.classList.toggle("completed"); // adding the 'completed' class from styles.css and toggling it.
    }
}
