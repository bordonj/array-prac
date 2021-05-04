


//UI logic
$(document).ready(function() {
  let favThings = [];
  $('form#info').submit(function(e1){
    e1.preventDefault();
    const name = $('input#name').val();
    const fav1 = $('input#fav1').val();
    const fav2 = $('input#fav2').val();
    const fav3 = $('input#fav3').val();
    const fav4 = $('input#fav4').val();

    const userInfo = [name, fav1, fav2, fav3, fav4]
    
    favThings.push(userInfo[1]);
    favThings.push(userInfo[2]);
    favThings.push(userInfo[3]);
    favThings.push(userInfo[4]);
    
    $('#userName').text(name);
    $('#first').text(favThings[0]);
    $('#second').text(favThings[1]);
    $('#third').text(favThings[2]);
    $('#fourth').text(favThings[3]);

    $('ul#all').append(`<li>${favThings[0]}</li>`);
    $('ul#all').append(`<li>${favThings[1]}</li>`);
    $('ul#all').append(`<li>${favThings[2]}</li>`);
    $('ul#all').append(`<li>${favThings[3]}</li>`);

    favThings.forEach(function(element) {
      $('ul#all').append(`<li>${element}</li>`);
    })
    $('#info').hide();
    $('#list').show();
  })
})