// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],


  roomMessage: {},

  render: function (data) {
    let currentLength = Rooms._data.length;

    if (typeof data === 'string') {
      RoomsView.render(Rooms._data);
    }

    for (var i = 0; i < data.length; i++) {
      if (!Rooms._data.includes(data[i]['roomname'])) {
        Rooms._data.push(data[i]['roomname']);
      }
    }
    if (currentLength !== Rooms._data.length) {
      RoomsView.render(Rooms._data);
    }

    // console.log(Rooms._data);
    RoomsView.handleClick();
    RoomsView.handleChange();
    Rooms.chatRoomOrganizer();
  },

  chatRoomOrganizer: function () {
    Rooms.roomMessage = {};
    var currentKeys = Object.keys(Rooms.roomMessage);
    for (var i = 0; i < Rooms._data.length; i++) {
      if (!currentKeys.includes(Rooms._data[i])) {
        Rooms.roomMessage[Rooms._data[i]] = [];
      }
    }
    for (var i = 0; i < Messages._data.length; i++) {
      if (Rooms.roomMessage[Messages._data[i].roomname]) {
        Rooms.roomMessage[Messages._data[i].roomname].push(Messages._data[i]);
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