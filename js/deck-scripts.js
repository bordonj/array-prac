$(document).ready(function() {
  let suits = ['clubs', 'diamonds', 'spades', 'hearts'];
  let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'king', 'queen'];
  
  suits.forEach(function(suit) {
    cards.forEach(function(card) {
      $("#all").append("<li>" + card + " of " + suit +"</li>");
    });
  });  
})

// let pickCard = () => {
//   suits.forEach(suit => {
//     cards.forEach(card => {
//       $('ul#all').append('<li>' + card + ' of ' + suit +'</li>');
//     })
//   })
// }
// pickCard();
