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

var putListOnScreen = function(items) {

  $("#todolist").append("<li>" + item.activity + " " + item.notes + "</li>");
  for (i = 0; i < shopingList.items.length; i++) {
    var activity = shopingList.items[i].activity;
    var note = shopingList.items[i].notes;
    // console.log(activity, note);
  }

}


$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    // var newlist = new List("what the user wants to call it");
    //
    // var newItem = new ListItem(userInput);
    //
    // newlist
  });

});
