"use strict";
const taskInputElement = document.getElementById("task-input");
const btn = document.getElementById("btn");
const taskDiv = document.getElementById("TaskDiv");
const dateTime = document.getElementById("date_time");
const taskArr = [];
// Functions
// Fetch Date & Time
let time;
setInterval(() => {
    time = ` ${new Date().getHours() > 9
        ? new Date().getHours()
        : "0" + new Date().getHours()} : ${new Date().getMinutes() > 9
        ? new Date().getMinutes()
        : "0" + new Date().getMinutes()} : ${new Date().getSeconds() > 9
        ? new Date().getSeconds()
        : "0" + new Date().getSeconds()} s`;
    dateTime.innerHTML = time;
}, 1000);
// Add Task
function addTask(item) {
    taskArr.push(item);
    displayTasks(taskArr);
    //   taskInputElement.value = "";
}
// Read Task
function displayTasks(item) {
    taskDiv.innerHTML = "";
    (item === null || item === void 0 ? void 0 : item.length) > 0
        ? item === null || item === void 0 ? void 0 : item.map((elem, index) => {
            if (taskDiv) {
                return (taskDiv.innerHTML += `<div class="flex py-1 h-fit max-[600px]:w-80 max-[600px]:mx-auto mx-2  my-2 rounded-l-full rounded-r-full px-4 items-center  gap-4 text-white bg-gray-800 w-96 justify-between "><div><h1 class=${(elem === null || elem === void 0 ? void 0 : elem.isCompleted) ? "line-through" : "text-xl max-[600px]:text-sm font-semibold"}>${elem.title} </h1></div>
    <div class="flex items-center"> <input  ${(elem === null || elem === void 0 ? void 0 : elem.isCompleted) ? "checked" : ""}
     } type="checkbox" class="h-5 my-auto w-5" onclick="isChecked(${index})" /> 
      <button class="bg-gray-500/70 font-semibold mx-2 text-white rounded-lg p-1 my-1" onclick="deleteTask(${index})">Delete</button></div></div>`); // Using += to append to existing content
            }
        })
        : (taskDiv.innerHTML = `<h1 class="text-center text-2xl text-center mx-auto max-[600px]:text-lg text-white font-extrabold">No Data Present</h1>`);
}
// IsCompleted
function isChecked(index) {
    const isCheckedArr = taskArr === null || taskArr === void 0 ? void 0 : taskArr.find((_, ind) => ind === index);
    if (isCheckedArr) {
        const temp = isCheckedArr === null || isCheckedArr === void 0 ? void 0 : isCheckedArr.isCompleted;
        isCheckedArr.isCompleted = !temp;
        taskArr.splice(index, 1, isCheckedArr);
        console.log(taskArr);
        displayTasks(taskArr);
    }
}
// Delete Task
function deleteTask(item) {
    const filterData = taskArr.filter((_, index) => {
        return index !== item;
    });
    displayTasks(filterData);
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    addTask({ title: (taskInputElement === null || taskInputElement === void 0 ? void 0 : taskInputElement.value) || "", isCompleted: false });
});
window.addEventListener("load", function () {
    displayTasks(taskArr);
});
