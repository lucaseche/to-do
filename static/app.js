const taskList = document.querySelector('#taskList');
const taskInput = document.querySelector('#taskInput');
const form = document.querySelector('#taskForm');
const btnInput = document.querySelector('#btnInput')
const clearBtn = document.querySelector('#clearBtn')

// agregar eventlisteners
form.addEventListener('submit', addTask);
btnInput.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTasks);


function addTask(e){

    // chequear por submit vacio
    if (taskInput.value === ''){
        alert('No podes agregar una tarea vacia');
    }
    else{
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
    }

    // si es la primera tarea, muestro el boton de eliminar todas las tareas
    if(taskList.childElementCount === 1){
        $('#clearBtn').show(200);
    }

    // prevenir compartiento por defecto del submit en el input 
    e.preventDefault();
}


function removeTask(e){

    // El target es el <i>, pero la clase la tengo en el link, que es el padre
    // por eso pregunto si el padre del target contiene esa clase
    if(e.target.parentElement.classList.contains('delete-item')){

        // remuevo al "abuelo" del <i> que seria el <li>
        e.target.parentElement.parentElement.remove();
    }

    // si es la ultima tarea, oculto el boton de eliminar todas las tareas
    if(taskList.childElementCount === 0){
        $('#clearBtn').hide(200);
    }
}


function clearTasks(){

    // consultar por la confirmacion de eliminacion de tareas
    if(confirm('Estas seguro?')){

        // mientras la lista de tareas tenga un elemento hijo, lo elimino
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
    }

    // si es la ultima tarea, oculto el boton de eliminar todas las tareas
    if(taskList.childElementCount === 0){
        $('#clearBtn').hide(200);
    }
}