// Business logic for Tasks
function Task(description, dueDate, owners, complete) {
  this.description = description;
  this.dueDate = dueDate;
  this.owners = owners;
  this.complete = complete;
}

// Business logic for Tasks list
function List() {
  this.tasks = {};
  this.currentId = 0;
}

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

List.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
};

Task.prototype.showTask = function() {
  let status = "";
  if (this.complete) {
    status = "Completed";
  } else {
    status = "Uncompleted <button class=\"changeStatus\">&#10003;</button>"
  }
  return "<ul><li>Desc: " + this.description + "</li><li>Due Date: " + this.dueDate + "</li><li>Owners: " + this.owners + "</li><li>" + status + "</li><button class=\"delete\">Delete Me</button></ul>"
};

$(document).ready(function() {
  let list = new List();

  $("form#form").submit(function(event) {
    
    event.preventDefault();

    let description = $("input#description").val();
    let dueDate = $("input#due-date").val();
    let owners = [$("input#owner1").val(), $("input#owner2").val()];
    let complete = $("input#complete").prop('checked');
    
    let task = new Task(description, dueDate, owners, complete);
    list.addTask(task);
    
    $("#task-names").append(task.showTask());
    $("button.delete").click(function() {
      $(this).parent().empty();
    });
    $("button.changeStatus").click(function() {
      $(this).parent().text("Completed");
    });
  });
});