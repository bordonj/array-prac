


//UI logic
$(document).ready(function() {
  let items = [];
  let uppItems = [];
  $('form#info').submit(function(e1){
    e1.preventDefault();
    const name = $('input#name').val();
    const item1 = $('input#item1').val();
    const item2 = $('input#item2').val();
    const item3 = $('input#item3').val();
    const item4 = $('input#item4').val();

    const userInfo = [name, item1, item2, item3, item4]
    
    // items.push(userInfo[1], userInfo[2], userInfo[3], userInfo[4]);

    userInfo.slice(1).forEach(item => items.push(item));
    items.sort();
    items.forEach(element => {
      uppItems.push(element.toUpperCase()); 
    });
    $('#userName').text(name);

    // userInfo.forEach(item => items.push(item));
    
    uppItems.forEach(element => $('ul#all').append(`<li>${element}</li>`));

    $('#info').hide();
    $('#list').show();
  })
})