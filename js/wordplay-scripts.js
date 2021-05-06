//business
const wordPlay = passage => {
  let finalArr = [];
  if (passage.trim().length === 0) {
    return 0;
  }
  const arrPass = passage.split(' ');
  arrPass.forEach(element => {
    if (element.length >= 3) {
      finalArr.push(element);
    }
  })
  let str = finalArr.reverse().join(' ');//initially did not make a new string variable, only did finalArr.join and returned finalArr, which did not work. need to make a new str variable with the new content
  return str;

  //can also just return line 13 
}



//UI
$(document).ready(function() {
  $('#info').submit(event => {
    event.preventDefault();
    const sentence = $('#text-passage').val();
    const result = wordPlay(sentence);
    $('#all').append(result);
    $('#list').show();
  })
})