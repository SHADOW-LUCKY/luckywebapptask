document.getElementById('formTask').addEventListener('submit', savetask)
function savetask(e) {
 let title = document.getElementById('title').value
 let descripcion = document.getElementById('description').value
 let prioridad = document.getElementById('priority').value
 const task = {
  title,
  descripcion,
  prioridad,
 }
 if (localStorage.getItem('tasks') === null) {
  let tasks = []
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 } else {
  let tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 }
 gettask()
 document.getElementById('formTask').reset()
 e.preventDefault()
}
function deltask(title) {
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].title == title) {
   tasks.splice(i, 1)
  }
 }
 localStorage.setItem('tasks', JSON.stringify(tasks))
 gettask()
}
function gettask() {
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 let viewtask = document.getElementById('tasks')
 viewtask.innerHTML = ''
 for (let i = 0; i < tasks.length; i++) {
  let title = tasks[i].title
  let descripcion = tasks[i].descripcion
  let prioridad = tasks[i].prioridad
  viewtask.innerHTML += `
     <div class = "card mb-4"> 
     <div class= "card-body">
     <p> ${title} - ${descripcion} - ${prioridad}<p>
     <a class="btn btn-danger" onclick= "deltask('${title}')">already accomplished</a>
     </div>
     </div>`
 }
}

gettask()
