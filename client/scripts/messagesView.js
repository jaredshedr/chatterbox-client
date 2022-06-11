// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    // MessagesView.clearAll();

    MessagesView.$chats.html('');
    data.forEach(function (item) {
      var $currentMessages = $(MessageView.render(item));
      $currentMessages.appendTo(MessagesView.$chats);
    });

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var $currentMessage = $(MessageView.render(message));
    $currentMessage.appendTo(MessagesView.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },

};




// Messages controls our data and we will create a template for each message through messagEview, then use messsages view to render them on the page