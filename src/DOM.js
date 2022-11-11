import Task from './tasks'

const ClassCalc = function (done, priority, dueDate) {
  const currentDate = new Date()
  const targetDate = new Date(dueDate)
  const daysLeft = (targetDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  if (done === true) {
    return 'done'
  } else if (done === false) {
    if (priority === 'High') {
      return 'urgent'
    } else if (daysLeft < 1) {
      return 'urgent'
    } else if (daysLeft < 7) {
      return 'attention'
    } else if (priority === 'Medium' && daysLeft < 14) {
      return 'attention'
    } else {
      return undefined
    }
  }
}

const changeStatus = function (statusChecker, task) {
  const parent = statusChecker.parentElement
  if (statusChecker.checked === true) {
    parent.classList.add('done')
    task.setDone(true)
  } else if (statusChecker.checked === false) {
    parent.classList.remove('done')
    task.setDone(false)
    const DOMClass = ClassCalc(task.done, task.priority, task.dueDate)
    if (DOMClass !== undefined) {
      parent.classList.add(DOMClass)
    }
  }
}

const createTaskDOM = function (title, description, dueDate, priority, done = false, object) {
  const div = document.createElement('div')
  div.classList.add('taskCard')
  div.id = title
  // Title
  const DomTitle = document.createElement('h3')
  DomTitle.innerText = title
  DomTitle.classList.add('taskTitle')
  div.appendChild(DomTitle)
  const DOMClass = ClassCalc(done, priority, dueDate)
  if (DOMClass !== undefined) {
    div.classList.add(DOMClass)
  }
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
  // Priority
  const statusLBL = document.createElement('h4')
  statusLBL.innerText = 'Done'
  statusLBL.classList.add('statusLabel')
  div.appendChild(statusLBL)
  const DomStatus = document.createElement('input')
  DomStatus.setAttribute('type', 'checkbox')
  DomStatus.classList.add('taskStatus')
  if (done === true) {
    DomStatus.checked = true
  }
  DomStatus.addEventListener('click', function () { changeStatus(this, object) })
  div.appendChild(DomStatus)
  // Return div
  return div
}

const loadAll = function (tasks) {
  const addBtn = document.getElementById('addBtn')

  const content = document.getElementById('content')
  for (let i = 0; i < tasks.length; i++) {
    content.appendChild(createTaskDOM(tasks[i].title, tasks[i].description, tasks[i].dueDate, tasks[i].priority, tasks[i].done, tasks[i]))
  }

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
}

export default loadAll
