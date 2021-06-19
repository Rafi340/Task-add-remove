let form = document.querySelector('#work_form');
let workList = document.querySelector('ul');
let clearbtn = document.querySelector('#clear_list');
let filter = document.querySelector('#remove_work');
let addWork = document.querySelector('#input_list');

//event listeners

form.addEventListener('submit', inputWork);
workList.addEventListener('click', rmvWork);
clearbtn.addEventListener('click', rmvAll);
filter.addEventListener('keyup', listrmv);
document.addEventListener('DOMContentLoaded', getList);


function inputWork(e){
    if(addWork.value === '')
    {
        alert('Add Your Work');
    }else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(addWork.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'X';
        li.appendChild(link);

        workList.appendChild(li);

        storeTaskInLocalStorage(addWork.value);
        addWork.value='';
    }
    e.preventDefault();
}

function rmvWork(e){
    if(e.target.hasAttribute("href")){
        if(confirm("are you Sure?")){
            let el = e.target.parentElement;
            el.remove();
            rmvfrmLS(el);
        }
    }
    //console.log(e.target);
}
function rmvAll(e){
    while(workList.firstChild){
        workList.removeChild(workList.firstChild);
        localStorage.clear();
    }
}
// remove list by search
function listrmv(e){
    let text = e.target.value.toLowerCase();
   // console.log(text);
   document.querySelectorAll('li').forEach(task =>{
       let itm= task.firstChild.textContent;
       if(itm.toLowerCase().indexOf(text) != -1){
           task.style.display = 'block';
       }else{
           task.style.display = 'none';
       }

   });
}
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null ){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getList(){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks =[];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'X';
        li.appendChild(link);

        workList.appendChild(li);
    
    });

}
function rmvfrmLS(workList){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    let li = workList;
    li.removeChild(li.lastChild); // <a>X</a>

    tasks.forEach((task, index) => {
        if(li.textContent.trim() === task){
            tasks.splice(index, 1);
        }
    }); 
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
