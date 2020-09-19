const taskList = document.querySelector('#taskList');
const taskInput = document.querySelector('#taskInput');
const form = document.querySelector('#taskForm');
const btnInput = document.querySelector('#btnInput')

// agregar eventlisteners
form.addEventListener('submit', addTask);
btnInput.addEventListener('click', addTask);

function addTask(e){

    // crear un li
    const li = document.createElement('li');
    
    // agregar clases
    li.className = 'list-group-item task-item';
    
    // agregar texto al li
    li.appendChild(document.createTextNode(taskInput.value));
    
    // crear link para el boton eliminar
    const link = document.createElement('a');

    // agregar clase al link
    link.className = 'delete-item secondary-content';
    
    // agregar icono al link
    link.innerHTML = '<i class="fa fa-remove"></i>';
    
    // agregar link al li
    li.appendChild(link);
    
    // agregar li a la lista
    taskList.appendChild(li);

    // borrar texto del input
    taskInput.value = '';

    // prevenir compartiento por defecto del submit en el input 
    e.preventDefault();
}



