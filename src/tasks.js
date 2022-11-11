class Task {
  constructor (title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.done = false
  }

  setDone = function (status) {
    if (status === true) {
      this.done = true
    } else {
      this.done = false
    }
  }
}

export default Task
