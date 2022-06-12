// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // $addroom: $('')

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(listOfRooms, event) {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    for (var selectedRoom of listOfRooms) {
      var $selectedRoom = $(`<option id = "selectedRoom" class="${selectedRoom}" value="${selectedRoom}">${selectedRoom}</option>`);
      $selectedRoom.appendTo(RoomsView.$select);
    }


  },

  roomBool: false,

  renderRoom: function(roomname) {
    // TODO: Render out a single room.

    RoomsView.roomBool = true;

    MessagesView.render(Rooms.roomMessage[roomname]);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    RoomsView.$select.on('change', function () {
      var value = $(this).val();
      RoomsView.renderRoom(value);
    });

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    $('.add-room').on('click', function() {
      var newRoomName = $('.room-value').val();
      if (!Rooms._data.includes(newRoomName)) {
        Rooms._data.push(newRoomName);
      }
      Rooms.render(newRoomName);

    });
  }

};


