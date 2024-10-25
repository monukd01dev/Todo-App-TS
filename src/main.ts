import relaxing from "./relaxing.svg";

interface Todo{
  readonly id: string;
  title: string;
  isCompleted: boolean;
}

let todos:Array<Todo> = [];

const todoContainer = document.getElementById("todo-con") as HTMLDivElement;
const taskInput = document.getElementById("task-input") as HTMLInputElement;
const form = document.getElementById("todo-form") as HTMLFormElement;

const noTodos=():void=>{
  if(todos.length === 0){
    todoContainer.innerHTML=`<div class="img-con flex flex-col justify-center items-center italic text-slate-600 text-lg ">
        <p>No Tasks to do...</p>
        <img src="${relaxing}" class="max-w-lg" alt="">
      </div>`;
  }else{
    todoRender(todos)
  }
}





// Form Code 
form.onsubmit = ((e:SubmitEvent)=>{
  e.preventDefault();
  //create todo
  const tempDoto:Todo = {
    id: crypto.randomUUID(),
    title: taskInput.value,
    isCompleted: false,
  }
  taskInput.value = "";

  todos.push(tempDoto);

  todoRender(todos);
})

const todoRender = (todos:Todo[]):void=>{
  todoContainer.innerHTML = "";
  
  // biome-ignore lint/complexity/noForEach: <explanation>
    todos.forEach((todo)=>{
    todoContainer.insertAdjacentHTML("beforeend",`
        <div class="todo font-mono flex  p-2 pr-0
      border-2 text-xl border-blue-950
      rounded-lg
      ">
        <div class="task w-9/12 md:w-10/12 overflow-x-hidden ${todo.isCompleted && 'line-through text-slate-500'}">
          ${todo.title}
        </div>

        <div class="actions  border-l-2 border-l-slate-500 w-3/12 md:w-2/12 flex items-center justify-evenly">
        <p class="hidden">${todo.id}</p>
          <button class="complete-task ${todo.isCompleted ? 'text-green-500' : ""} ">
            <i class="fa-solid fa-check"></i>
          </button>
          <button class="delete-task">
            <i class="fa-solid fa-xmark hover:text-red-500 transition-all"></i>
          </button>
        </div>
      </div>
      `)
  })

  //adding event on every button
 const completeTodoBtns = Array.from(document.getElementsByClassName("complete-task")) as HTMLButtonElement[] ;
 const deleteTodoBtns = Array.from(document.getElementsByClassName('delete-task')) as HTMLButtonElement [] ;
 // biome-ignore lint/complexity/noForEach: <explanation>
  completeTodoBtns.forEach((doneBtn)=>{
  doneBtn.onclick= (e:Event)=>{

    const iElement = e.target as HTMLElement;
    const button = iElement.parentNode as HTMLButtonElement;
    const parentElement = button.parentNode as HTMLDivElement;
    const idHolder = parentElement.children[0] as HTMLParagraphElement;
    const id = idHolder.innerText
    if(button.classList.contains("text-green-500")){
      todoStatus(id,false);
    }else{
      todoStatus(id,true);
    }
  }
 })
 // biome-ignore lint/complexity/noForEach: <explanation>
  deleteTodoBtns.forEach((deleteBtn)=>{
  deleteBtn.onclick= (e:Event)=>{

    const iElement = e.target as HTMLElement;
    const button = iElement.parentNode as HTMLButtonElement;
    const parentElement = button.parentNode as HTMLDivElement;
    const idHolder = parentElement.children[0] as HTMLParagraphElement;
    const id = idHolder.innerText
    
    removeTodo(id);
  }
 })
}

//action buttons
todoContainer.onclick= (e:Event)=>{
  e.currentTarget
}

// actions
const todoStatus=(id:string,status:boolean):void=>{
  todos = todos.map((todo)=> todo.id === id ? {...todo,isCompleted : status} : todo) 
  todoRender(todos);
}

const removeTodo=(id:string):void=>{
  todos = todos.filter(todo=> todo.id !== id);
  todos.length === 0 ? noTodos() : todoRender(todos)
  
}

const saveTodosToLocalStorage=(todos:Todo[]):void =>{
  localStorage.setItem("todos", JSON.stringify(todos));
}
const loadTodosFromLocalStorage=():void=>{
  todos = JSON.parse(localStorage.getItem("todos") || '[]');
  noTodos();
}

loadTodosFromLocalStorage();

window.addEventListener("unload", ()=>{
  saveTodosToLocalStorage(todos);
})



