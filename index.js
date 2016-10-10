$(function  () {
  $('button').click(function (e) {
    e.preventDefault();
    var t1 = $('#t1').val();
    var t2 = $('#t2').val();
    var t3 = $('#t3').val();

    if (t1 == 'C' && t2 == 'W' && t3 == 'F') {
      window.location.href = 'clue.html';
    } else {
      $('.error').css('display','block');
    }
  })
});