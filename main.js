var listObjectsTasks = [];
var title = document.getElementById("taskTitle");
var description = document.getElementById("taskDescription");
var date = document.getElementById("taskDate");
var idTasks = 0;


window.onload=function(){

    
    document.getElementById("alert").style.display = "none";
    
    var create = document.getElementById("createBtn").addEventListener("click",()=>{
        if (generateTask(title.value,description.value,date.value) === false) {
            console.log(document.getElementById("alert"));
            document.getElementById("alert").style.display = "block";
        }
        else{document.getElementById("alert").style.display = "none";}
    });
    
    var searchbtn = document.getElementById("search").addEventListener("click",()=>{
        let title = document.getElementById("searchInput").value
        console.log("looking for: ",title);
        search(title,"10-10-2022",true);
    });
    var clearbtn = document.getElementById("clear").addEventListener("click",()=>{
        clear();
    });
    
}
/* ============================= fuctions ================================================== */




/**
 * generate a task and list in the list of the left column
 * and returns true if it was successfuly created
 * 
 * @param {string} title 
 * @param {string} description 
 * @param {date} date 
 */
function generateTask(title,description,date) {
    let successful = false;
    
    let task ={
        title : title,
        description : description,
        date : date,
    }

    let keys = Object.keys(task);
    for (let x = 0; x < keys.length; x++) {
        const value = task[keys[x]];
        if (value == "") {
            return successful;
        }
        else{
            console.log("has "+keys[x]);
        }
    }
    
    let htmlTask = document.createElement("li");
    let htmlCheckbox = document.createElement("input");
    let htmlInner = document.createElement("div");
    let htmlTitle = document.createElement("span");
    let htmlDate = document.createElement("span");
    let htmlDescription = document.createElement("span");
    
    htmlTask.classList.add("list-group-item","d-flex");
    htmlCheckbox.classList.add("form-check-input","mx-2");htmlCheckbox.type="checkbox";    
    htmlInner.classList.add("task_container");

    htmlTitle.classList.add("ms-2", "fw-bold");
    htmlTitle.innerHTML = task.title;
    
    htmlDate.classList.add("ms-5");
    htmlDate.innerHTML = "Due date: " + task.date;
    
    htmlDescription.classList.add("ms-3");
    htmlDescription.innerHTML = task.description;
    
    htmlTask.appendChild(htmlCheckbox);
    htmlTask.appendChild(htmlInner);
    htmlInner.appendChild(htmlTitle);
    htmlInner.appendChild(htmlDate);
    htmlInner.appendChild(htmlDescription);
    
    document.getElementById("tasks").appendChild(htmlTask);
    listObjectsTasks.push(task);
    idTasks++;
    successful = true;
    return(successful);
}

/**
 * Takes info and filter the tasks by the parameters given
 * @param {str} title 
 * @param {int} date 
 * @param {boolean} done 
 */
function search(title,date,done) {
    let taskList = Array.from(document.getElementsByTagName("li"))
    for (let z = 0; z < taskList.length; z++) {
        const element = taskList[z];
        let taskTitle = Array.from(element.getElementsByClassName("fw-bold"));taskTitle=taskTitle[0].innerHTML;
        let taskDescription = Array.from(element.getElementsByClassName("ms-3"));taskDescription=taskDescription[0].innerHTML;
        let taskDate = Array.from(element.getElementsByClassName("ms-5"));taskDate=taskDate[0].innerHTML;
        console.log(taskTitle,taskDescription,taskDate);

        if (title.toLowerCase() != taskTitle.toLowerCase()) {
            alert(taskTitle);
            taskList.splice(z,1)
            element.style.setProperty('display', 'none', 'important');
        }
    }
    taskList.forEach(element => {
        element.style.setProperty('display', 'flex', 'important');
    });
}
/**
 * clears the existing filters
 */
function clear() {   
    document.getElementById("dropdown1").value = 0;
    document.getElementById("checkbox").checked = false;
}