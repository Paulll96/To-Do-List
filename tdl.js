const inputbox=document.getElementById("input-id");
const listcontainer=document.getElementById("listid");
function addtask()
{
    const task=inputbox.value.trim();
    if(!task)
    {
        alert("Write a task dummy");
        return;
    }
    const li=document.createElement("li");
 li.innerHTML =`
  <label>
    <input type="checkbox">
    <span>${task}</span>
  </label>
  <span class="editb">Edit</span>
  <span class="deleteb">Delete</span>
`;
listcontainer.appendChild(li);
inputbox.value=""


   
}
const checkbox=li.querySelector("input");
const editbutton=li.querySelector(".editb");
const tspan=li.querySelector("span");
const deletebutton=li.inputbox.querySelector("deleteb");

checkbox.addEventListener("click",function() {
    li.classList.toggle("Completed",checkbox.checked)
});

editbutton.addEventListener("click",function(){
    const update=prompt("Edit task:",taskSpan.textContent);
    if (update!==null)
    {
        taskSpan.textContent=update;
        li.classList.remove("Completed");
    }

});
li.classList.remove("Completed");
const completedcounter=document.getElementById("ccounter");
const uncompletedcounter=document.getElementById("ucounter");


 