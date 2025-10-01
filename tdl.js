const inputbox=document.getElementById("input-id");
const listcontainer=document.getElementById("listid");
const completedcounter=document.getElementById("ccounter");
const uncompletedcounter=document.getElementById("ucounter");
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

    const checkbox=li.querySelector("input");
    const editbutton=li.querySelector(".editb");
    const taskspan=li.querySelector("span");
    const deletebutton=li.querySelector(".deleteb");

    checkbox.addEventListener("click",function() {
        li.classList.toggle("completed",checkbox.checked)
    });


    li.classList.remove("completed");
    updatecounters();checkbox.addEventListener("click",function()
    {
        li.classList.toggle("completed",checkbox.checked);
        updatecounters();


    });
    editbutton.addEventListener("click",function()
    {
        const update=prompt("Edit task:",taskspan.textContent);
        if(update!==null)
        {
            taskspan.textContent=update;
            li.classList.remove("completed");
            checkbox.checked=false;
            updatecounters();

        }
    });
    deletebutton.addEventListener("click",function()
    {
        if(confirm("Delete this task!?"))
        {
            li.remove();
            updatecounters();
            
        }

    });



   
}

function updatecounters()
{
    const ctasks=document.querySelectorAll(".completed").length;
    const utasks=document.querySelectorAll("li:not(.completed)").length;
    completedcounter.textContent=ctasks;
    uncompletedcounter.textContent=utasks;

}




 