import './style.css'
import Task from './tasks'

const addBtn = document.getElementById('addBtn')

const tasks = []

const content = document.getElementById('content')

tasks.push(new Task('Teste', 'Description Test', '01-01-2020', 'mid'))

const loadAll = function () {
  for (let i = 0; i < tasks.length; i++) {
    const div = document.createElement('div')
    div.classList.add('taskCard')
    const title = document.createElement('p')
    title.innerText = tasks[i].title
    const description = document.createElement('p')
    description.innerText = tasks[i].description
    const dueDate = document.createElement('p')
    dueDate.innerText = tasks[i].dueDate
    const priority = document.createElement('p')
    priority.innerText = tasks[i].priority
    div.appendChild(title)
    div.appendChild(description)
    div.appendChild(dueDate)
    div.appendChild(priority)
    content.appendChild(div)
  }
}

loadAll()

addBtn.addEventListener('click', function () {
  const title = document.getElementById('title').value
  const description = document.getElementById('description').value
  const dueDate = document.getElementById('dueDate').value
  const priority = document.getElementById('priority').value
  const test = new Task(title, description, dueDate, priority)
  tasks.push(test)
  const div = document.createElement('div')
  div.classList.add('taskCard')
  const DomTitle = document.createElement('p')
  DomTitle.innerText = title
  const DomDescription = document.createElement('p')
  DomDescription.innerText = description
  const DomDueDate = document.createElement('p')
  DomDueDate.innerText = dueDate
  const DomPriority = document.createElement('p')
  DomPriority.innerText = priority
  div.appendChild(DomTitle)
  div.appendChild(DomDescription)
  div.appendChild(DomDueDate)
  div.appendChild(DomPriority)
  content.appendChild(div)
})
