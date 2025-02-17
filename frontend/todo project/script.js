const input = document.getElementById("todo");
const list = document.getElementById("list-container");
function addTask(){
    if(input.value === ''){
        alert('Please enter a task');
    }
    else
    {
        let li = document.createElement("li");
        li.textContent= input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '&times;';
        li.appendChild(span);

            if(new_task === ''){
                alert('Please enter a task');
            }
            else{
                li.textContent = new_task;
                li.appendChild(span);
                li.appendChild(edit_btn);
                save();
            }
        }
        input.value = '';
        save();
    
}
list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        save();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        save();
    }
});
function save(){
    localStorage.setItem('data', list.innerHTML);
}
function load(){
    list.innerHTML = localStorage.getItem('data');
}
load();
