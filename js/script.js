let form = document.querySelector('#work_form');
let workList = document.querySelector('ul');
let clearbtn = document.querySelector('#clear_list');
let filter = document.querySelector('#remove_work');
let addWork = document.querySelector('#input_list');

//event listeners

//form.addEventListener('submit', inputWork );
form.addEventListener('submit', inputWork);

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
        addWork.value='';
    }
    e.preventDefault();
}
