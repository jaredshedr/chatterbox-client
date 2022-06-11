// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  render: function (data) {
    Messages._data = data;

    Messages.escaper();

    // condition
    if (!RoomsView.roomBool) {
      MessagesView.render(Messages._data);
    } else {
      RoomsView.renderRoom(RoomsView.$select.val());
    }

  },

  escaper: function () {
    Messages._data.forEach(function(currentMessage) {
      currentMessage = {
        'message_id': _.escape(currentMessage.message_id),
        roomname: _.escape(currentMessage.roomname),
        text: _.escape(currentMessage.text),
        username: _.escape(currentMessage.username),
        'github_handle': _.escape(currentMessage.github_handle),
        'created_at': _.escape(currentMessage.created_at)
      };
    });
  },






  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};


// setTimeout(function () {
//   console.log(Messages._data);
// }, 5000);