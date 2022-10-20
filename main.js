var listObjectsTasks = [];
var title = document.getElementById("taskTitle");
var description = document.getElementById("taskDescription");
var date = document.getElementById("taskDate");


window.onload=function(){

    
    document.getElementById("alert").style.display = "none";
    
    var create = document.getElementById("createBtn").addEventListener("click",()=>{
        if (generateTask(title.value,description.value,date.value) === false) {
            console.log(document.getElementById("alert"));
            document.getElementById("alert").style.display = "block";
        }
        else{document.getElementById("alert").style.display = "none";}
    });
    
    var search = document.getElementById("search").addEventListener("click",()=>{
        search("title","10-10-2022",true);
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
    // htmlDescription.classList.add("");
    htmlDate.classList.add("ms-2");
    htmlDate.innerHTML = "Due date: " + task.date;
    htmlDescription.innerHTML = task.description;
    
    htmlTask.appendChild(htmlCheckbox);
    htmlTask.appendChild(htmlInner);
    htmlInner.appendChild(htmlTitle);
    htmlInner.appendChild(htmlDate);
    htmlInner.appendChild(htmlDescription);
    
    document.getElementById("tasks").appendChild(htmlTask);
    listObjectsTasks.push(task);
    successful = true;
    return(successful);
}

/**
 * Takes info and filter the tasks by the parameters given
 * @param {str} string 
 * @param {int} date 
 * @param {boolean} done 
 */
function search(string,date,done) {
    let x = document.getElementsByTagName("li").style.display = "none";
}
