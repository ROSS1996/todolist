import loadAll from './DOM'
import './style.css'
import Task from './tasks'

const tasks = []

const filterList = document.getElementById('filters')

const finished = document.createElement('p')
finished.innerText = 'Finished'
finished.classList.add('filters')
filterList.appendChild(finished)

finished.addEventListener('click', function () {
  this.classList.toggle('active')
  const taskCards = document.getElementsByClassName('taskStatus')
  for (const task of taskCards) {
    if (task.checked === true) {
      task.parentElement.remove()
    }
  }
})

tasks.push(new Task('Test', 'Teste task number 1', '01-01-2020', 'Medium'))
tasks[0].done = true

tasks.push(new Task('Test 2', 'Test task number 2', '11-15-2023', 'Medium'))
tasks[1].done = false

loadAll(tasks)
