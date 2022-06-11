// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],


  roomMessage: {},


  chatRoomOrganizer: function () {
    var currentKeys = Object.keys(Rooms.roomMessage);
    for (var i = 0; i < Rooms._data.length; i++) {
      if (!currentKeys.contains(Rooms._data[i])) {
        Rooms.roomMessage[Rooms._data[i]] = [];
      }
    }
  }


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.


  // selectedroom method? determine what we send to API in our POST

  // method to determine which room we are in and show chatroom

};

// setTimeout(function () {
//   console.log(Rooms._data);
// }, 5000);