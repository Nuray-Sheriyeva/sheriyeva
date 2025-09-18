console.log("Nuray Sheriyeva & IT-2403");
//alert("Hello, Javascript World!");

var subject="Math";
var gpa=89.9;
var passing=true;

console.log("9+10=", 9+10);
console.log("6+7=", 6+7);
console.log("6+9=", 6+9);
console.log("13-2+1=", 13-2+1);

var name = "Nuray";
var surname = "Sheriyeva";
console.log(name +" "+ surname);

function change() {
    document.querySelector("p").innerHTML="My name is chka chka Slim Shady";
}
const button = document.getElementById('changeText')
button.addEventListener("click", change)


function back() {
    document.getElementById("container").style.backgroundColor = 'black';
    document.getElementById("container").style.fontSize = "5rem";
}
const themeButton = document.getElementById('changeBack')
themeButton.addEventListener("click", back)

let counter=2
function add(){
    counter++
    const li = document.createElement("li")
    document.getElementById("list").appendChild(li)
    li.textContent=prompt("Item: ")
    li.id = "item"+counter
}
const addLi=document.getElementById('addItem')
addLi.addEventListener("click", add)


function remove(){
    const child = document.getElementById("item"+counter)
    document.getElementById("list").removeChild(child)
    counter--
}
const removeLi=document.getElementById('removeItem')
removeLi.addEventListener("click", remove)


function overdiv(){
    document.getElementById("mouseov").style.backgroundColor = "blue"
}
function outdiv(){
    document.getElementById("mouseov").style.backgroundColor = "white"
}
const backButton= document.getElementById('mouseov')
backButton.addEventListener("mouseover", overdiv)
backButton.addEventListener("mouseout", outdiv)


function value(){
    const value = event.target.value
    document.getElementById('heading').textContent = "Current input: " + value;
    console.log('Current value:', value);
}
const input = document.getElementById('input')
input.addEventListener('keyup', value)

let taskCounter=0
const listTask =[]
function addTask(){
    taskCounter++
    const check = document.createElement("input")
    document.getElementById("toDo").appendChild(check)
    check.setAttribute("type", "checkbox")
    


    const label = document.createElement("label")
    document.getElementById("toDo").appendChild(label)
    label.textContent=prompt("Task: ")
    label.id = "task"+taskCounter
    listTask.push(label.textContent)
    console.log(listTask)

    check.addEventListener("change", function () {
    if (check.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }})
}
const taskevent=document.getElementById('addTask')
taskevent.addEventListener("click", addTask)

