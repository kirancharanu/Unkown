const taskinput = document.getElementById("taskinput")
const tasklist = document.getElementById("tasklist")

function addtask(){
    const tasktext = taskinput.value.trim();

    if(tasktext !==""){
        const listitem = document.createElement("li");
        listitem.innerHTML =`<span>${tasktext}</span>
        <button onclick="deletetask(this)">delete</button>`

        tasklist.appendChild(listitem);

        taskinput.value = ""
    }
}

function deletetask(button){
    const listitem = button.parentElement;
    tasklist.removeChild(listitem);
}