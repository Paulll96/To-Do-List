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
  <span class="edit-btn">Edit</span>
  <span class="delete-btn">Delete</span>
`;
listcontainer.appendChild(li);
inputbox.value=""
   
}
 