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
  this.activity  = activity;
  this.notes = notes
}
