function List() {
  this.items = [],
    this.currentId = -1
}

List.prototype.addItem = function(item) {
  item.id = this.assignId();
  this.items.push(item);
}

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function ListItem(activity, notes) {
  this.activity = activity;
  this.notes = notes
}



// ------------------ UI logic---------------------

var putListOnScreen = function(list) {

  for (i = 0; i < list.items.length; i++) {
    var activity = list.items[i].activity;
    var note = list.items[i].notes;
    $("#todolist").append("<li>" + activity + " " + note + "</li>");
    console.log(activity, note);
  }

}


$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    var newList = new List($("#name-of-user").val());
    var newItem = new ListItem($("#task-list").val(), $("#task-notes").val());
    newList.addItem(newItem);

    putListOnScreen(newList);

    console.log(newList, newList.items);

  });

});
