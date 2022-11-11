import './style.css'
import Task from './tasks'

const addBtn = document.getElementById('addBtn')

const tasks = []

const content = document.getElementById('content')

tasks.push(new Task('Teste', 'Description Test', '01-01-2020', 'mid'))

const createTaskDOM = function (title, description, dueDate, priority) {
  const div = document.createElement('div')
  div.classList.add('taskCard')
  // Title
  const DomTitle = document.createElement('h3')
  DomTitle.innerText = title
  DomTitle.classList.add('taskTitle')
  div.appendChild(DomTitle)
  // Description
  const DomDescriptionLBL = document.createElement('h4')
  DomDescriptionLBL.innerText = 'Description'
  DomDescriptionLBL.classList.add('descLabel')
  div.appendChild(DomDescriptionLBL)
  const DomDescription = document.createElement('p')
  DomDescription.innerText = description
  DomDescription.classList.add('taskDescription')
  div.appendChild(DomDescription)
  // Due Date
  const DomDueDateLBL = document.createElement('h4')
  DomDueDateLBL.innerText = 'Due Date'
  DomDueDateLBL.classList.add('dateLabel')
  div.appendChild(DomDueDateLBL)
  const DomDueDate = document.createElement('p')
  DomDueDate.innerText = dueDate
  DomDueDate.classList.add('taskDueDate')
  div.appendChild(DomDueDate)
  // Priority
  const DomPriorityLBL = document.createElement('h4')
  DomPriorityLBL.innerText = 'Priority'
  DomPriorityLBL.classList.add('priorityLabel')
  div.appendChild(DomPriorityLBL)
  const DomPriority = document.createElement('p')
  DomPriority.innerText = priority
  DomPriority.classList.add('taskPriority')
  div.appendChild(DomPriority)
  // Return div
  return div
}

const loadAll = function () {
  for (let i = 0; i < tasks.length; i++) {
    content.appendChild(createTaskDOM(tasks[i].title, tasks[i].description, tasks[i].dueDate, tasks[i].priority))
  }
}

loadAll()

addBtn.addEventListener('click', function (submit) {
  submit.preventDefault()
  const title = document.getElementById('title').value
  const description = document.getElementById('description').value
  const dueDate = document.getElementById('dueDate').value
  const priority = document.getElementById('priority').value
  if (title !== '' && description !== '' && dueDate !== '' && priority !== '') {
    const task = new Task(title, description, dueDate, priority)
    tasks.push(task)
    content.appendChild(createTaskDOM(title, description, dueDate, priority))
  }
})
