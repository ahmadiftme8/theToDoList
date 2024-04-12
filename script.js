let addNewBtn = document.querySelector('.add-new-btn');

let textInputElement = document.querySelector('.new-task-input');

let firstPageContainer = document.querySelector('.first-page-content-container')

let lastPageContainer = document.querySelector('.third-page-container');

let textTaskContainer = document.querySelector('.test-task-container');

let taskCardsConatiner = document.querySelector('.task-cards-countainer');

let todoList = ['whash', 'study'];

function alertUser(){
    if(textInputElement.value === ''){
        alert('enter a task');
    }
    return undefined;
}

 function connectTextInputWithAddBtn(){
    task = textInputElement.value;
    if(task !==){
        
    }
    for(let i = 0; i<todoList.length; i++){
        
        if(task.trim() !== ''){
            todoList.push(task);
            return todoList;
        }
        
    }
 
} 



function secondPageRendering(){
    let secondPageHTML = `<div class="first-page-content-container">
    <p class="title-p">TODO</p>
    <p class="subtitle-p">Remined Everything!</p>
    <div class="add-task-btn-container">
        <div class="add-new-task-field-container">
            <input class="new-task-input" type="text">
            <input class="new-date-input" type="date">
            <input class="new-time-input" type="time">
            <button class="add-new-btn">+</button>
        </div>
    </div>    
</div>

<div class="three-dot-menu-icon">
    ...
</div>

 `
firstPageContainer.innerHTML = '';
    lastPageContainer.innerHTML = secondPageHTML;
}


function renderTodoList(){
    let todoListHTML ='';
    for(let i = 0; i<todoList.length; i++){
        task = todoList[i];
        
        let html = `<div class="task-card">
        <div class="checkbox-input-container">
            <input class="checkbox-input" type="checkbox">
        </div>
        

        <div class="task-name-and-due-date-container">
            <p class="task-name-p">${task}</p>
            <p class="due-date-p">04/01/2024 - 15:45</p>
        </div>

        <div class="delete-icon-container">
            <button class="delete-btn">
                del
            </button>
        </div>
    </div>`
        todoListHTML = todoListHTML + html;
        let final = taskCardsConatiner.innerHTML = todoListHTML;
        return final;
    }
 
   
}



addNewBtn.addEventListener('click', function(){
    alertUser();
    
    if(textInputElement.value !== ''){
       
       connectTextInputWithAddBtn();
       secondPageRendering();
       renderTodoList();

        console.log(renderTodoList());


    }
    
    
});








/* let addNewBtn = document.querySelector('.add-new-btn');
let textInputElement = document.querySelector('.new-task-input');
let dateInputElement = document.querySelector('.new-date-input');
let lastPageContainer = document.querySelector('.third-page-container');

let firstPageContainer = document.querySelector('.first-page-content-container') */


/* let toDosHTML = [{
    taskName,
    dueDate,

}]


function dateAndTaskNameHTML(){
    let taskCardHTML = `<div class="task-card">
    <div class="checkbox-input-container">
        <input class="checkbox-input" type="checkbox">
    </div>
    

    <div class="task-name-and-due-date-container">
        <p class="task-name-p"> ${toDosHTML.taskName}</p>
        <p class="due-date-p">${toDosHTML.dueDate} - 15:45</p>
    </div>

    <div class="delete-icon-container">
        <button class="delete-btn">
            del
        </button>
    </div>
</div>`
}


function secondPageHTML(){
    lastPageContainer.innerHTML = `
    <div class="first-page-content-container">
                <p class="title-p">TODO</p>
                <p class="subtitle-p">Remined Everything!</p>
                <div class="add-task-btn-container">
                    <div class="add-new-task-field-container">
                        <input class="new-task-input" type="text">
                        <input class="new-date-input" type="date">
                        <input class="new-time-input" type="time">
                        <button class="add-new-btn">+</button>
                    </div>
                </div>    
            </div>

            <div class="three-dot-menu-icon">
                ...
            </div>

            <div class="task-cards-countainer">
            ${toDosHTML}
            </div>
    `
}



function renderSecondPage(){
    for(let i = 0; i< toDosHTML; i++){

    }
    dateAndTaskNameHTML();
    secondPageHTML();
}

addNewBtn.addEventListener('click', renderSecondPage);

function inputAndBtn(){

} */








