// Business logic for Tasks
function Task(description, dueDate, owners, isComplete) {
  this.description = description;
  this.dueDate = dueDate;
  this.owners = owners;
  this.isComplete = isComplete;
}