//Business logic for Places list
function List() {
  this.places = {};
  this.currentId = 0;
}

List.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

//Business logic for Places
function Place(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}