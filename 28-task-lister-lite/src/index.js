

// - As a user, I should be able to type a task into the input field.
// - As a user, I should be able to click some form of a submit button.
// - As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

// find the task form on the DOM
const myForm = document.getElementById("create-task-form")

// create a select dropdown for level of importance
const selectDropdown = document.createElement("select")

// insert the select dropdown into the existing form
myForm.children[1].insertAdjacentElement('afterend', selectDropdown)

// create options for the select dropdown
const highOption = document.createElement("option")
highOption.innerText = "high"
selectDropdown.append(highOption)

const mediumOption = document.createElement("option")
mediumOption.innerText = "medium"
selectDropdown.append(mediumOption)

const lowOption = document.createElement("option")
lowOption.innerText = "low"
selectDropdown.append(lowOption)


function handleDelete(e){
  e.target.parentElement.remove()
}

function importanceColor(importance){
  if (importance === "high") {
    return "red"
  } else if (importance === "medium") {
    return "orange"
  } else {
    return "green"
  }
}

function handleFormSubmit(e){
  // prevent default form action
  e.preventDefault()
  // getting the parameters of what was submitted
  // save the user's task as a variable
  const newTask = e.target["new-task-description"].value
  // save the importance value into a variable
  const importanceLevel = e.target.children[2].value
  // convert the importance level into a color
  const color = importanceColor(importanceLevel)

  // display the task on the DOM
  // select the UL off the page
  const taskUL = document.querySelector("#tasks")
  // create a delete button
  const deleteBtn = document.createElement("button")
  // make the inner text an X
  deleteBtn.innerText = "X"
  // add an event listener for when the user clicks the delete button
  deleteBtn.addEventListener("click", handleDelete)

  // create a new LI tag
  const LI = document.createElement("li")
  // make the color of the LI text the color based off of its importance level
  LI.style.color = color
  // take the info from the user input and add that to the LI
  // first modify the LI to have text in it.
  LI.textContent = newTask
  // append the delete button to the LI tag
  LI.append(deleteBtn)
  // then append as a child onto the taskUL
  taskUL.appendChild(LI)
  // clear the form
  e.target.reset()
}

// listening for when the user submits the form, when submitted, handleFormSubmit callback function is triggered
myForm.addEventListener("submit", handleFormSubmit)