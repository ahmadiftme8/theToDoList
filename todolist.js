let textInput = document.querySelector('.text-input');
let addBtn = document.querySelector('.add-btn');
let todolistContainer = document.querySelector('.todolist-container');
/* let clearAll = document.querySelector('.clear-all'); */
let dateInput = document.querySelector('.date-input');
let timeInput = document.querySelector('.time-input');
let settingBtn = document.querySelector('.setting-btn');
let body = document.querySelector('.body');







// Get today's date
let today = new Date();

// Format today's date as 'yyyy-mm-dd'
let todayFormatted = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');

// Set the min attribute of the date input field to today's date
dateInput.min = todayFormatted;



/*HERE IS THE CODE FOR SETTING SECTION */


    const settingDiv = document.createElement('div');
    const clearAll = document.createElement('button');
    const darkMode = document.createElement('button');
    settingElementsStuff();
function settingElementsStuff(){
    settingDiv.classList.add('setting');
    clearAll.classList.add('clear-all');
    darkMode.classList.add('dark-mode');

    clearAll.textContent = 'Clear All';
    darkMode.textContent = 'Dark Mode';
    document.body.appendChild(settingDiv);
    settingDiv.appendChild(clearAll);
    settingDiv.appendChild(darkMode);

    
}








/*HERE IS THE CODE FOR SETTING SECTION */




todoList = JSON.parse(localStorage.getItem('todolist')) || [{
    
}] ;



function createTodoList(){
    
    todoList.task = textInput.value;
    todoList.date = dateInput.value;
    todoList.time = timeInput.value;

    let todoObject ={
        task : todoList.task,
        date : todoList.date,
        time : todoList.time
    }
    
    todoList.push(todoObject);
    renderTodoList();
    localStorage.setItem('todolist',JSON.stringify(todoList));
    return todoList;
    
}
    
    
renderTodoList();
function renderTodoList(){
    let todoListHTML ='';
    todoList.sort((a, b) => new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time));
    todoList.forEach(function(todoObject) {
        let task = todoObject.task;
        let date = todoObject.date;
        let time = todoObject.time;
        let html = `
        <div class="each-task-container">
            <input class="checkbox" type="checkbox">
            <div class="task-and-date-container">
                <p class="task-parg" style="display:inline-block">${task}</p>
                <p class="date-parg"> ${date} - ${time} </p>
            </div>
            
            <button class="del-btn" onclick="
            todoList.splice(${todoList.indexOf(todoObject)}, 1);
            renderTodoList();
            ">×</button>
        
        </div>
        
        `;
        todoListHTML += html;
        
    });

    

    

    todolistContainer.innerHTML = todoListHTML;
    checkbox();
   
    localStorage.setItem('todolist',JSON.stringify(todoList));


    
    
}

function checkbox(){
    let checkBoxes = document.querySelectorAll('.checkbox');
    let taskPargs = document.querySelectorAll('.task-parg');
    
    checkBoxes.forEach((checkBox, index) =>{

        checkBox.addEventListener('click', function(){
            if(this.checked){
                taskPargs[index].classList.add('checked');
            }else{
                taskPargs[index].classList.remove('checked');
            }
        })
    }

)
   
}






function clearAllTasks(){
    todoList = [];
    textInput.value = '';
    todolistContainer.innerHTML ='';
    localStorage.setItem('todolist',JSON.stringify(todoList));
   return 'All tasks cleared successfully';
}


addBtn.addEventListener('click', function(){
    
    if(textInput.value === ''){
        alert('Enter a Task!');
    }else{
        /* createTodoList(); */
        renderTodoList();
        console.log(createTodoList());
       /*  console.log(renderTodoList()); */
    }
    textInput.value = '';
})

textInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        if(textInput.value === ''){
            alert('Enter a Task!');
        }else{
            createTodoList();
            renderTodoList();
        }
        textInput.value = '';
    }
})

clearAll.addEventListener('click', function(){
     console.log(clearAllTasks()) ;
});



