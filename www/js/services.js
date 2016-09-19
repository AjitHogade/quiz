angular.module('dataProviders.services', [])

.factory('HtmlQ', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var html = [{
    id: 0,
    name: 'HTML is ________ language?',
    opt_1: 'Mark Up',
    opt_2: 'Server-side',
    opt_3: 'Client-side',
    opt_4: 'Non of these',
    correct_ans: 'opt_1'
  }, {
    id: 1,
    name: '<td> .. </td> tag is used for ________',
    opt_1: 'Table Data',
    opt_2: 'Table Head',
    opt_3: 'Table Row',
    opt_4: 'None of these',
    correct_ans: 'opt_1'
  }];

  return {
    // all: function() {
    //   return chats;
    // },
    // remove: function(chat) {
    //   chats.splice(chats.indexOf(chat), 1);
    // },
    get: function(quesId) {
      for (var i = 0; i < html.length; i++) {
        if(parseInt(quesId) > 10){

        }else{
        if (html[i].id === parseInt(quesId)) {
console.log(html[i])  
        return html[i];
        }
      }
      }
      return null;
    }
  };
})
