$(document).ready(function(){
  $('#add').on('click',function(){
    var val1 = parseInt(document.getElementById('val1').value)
    var val2 = parseInt(document.getElementById('val2').value)
    $('#result').html(val1 + val2)

  })
  $('#multiply').on('click',function(){
    var val1 = parseInt(document.getElementById('val1').value)
    var val2 = parseInt(document.getElementById('val2').value)
    var sum= val1 * val2
    $('#result').html(val1 * val2)
  })
  $('#subtract').on('click',function(){
    var val1 = parseInt(document.getElementById('val1').value)
    var val2 = parseInt(document.getElementById('val2').value)
    var sum= val1 - val2
    $('#result').html(val1 - val2)
  })
  $('#divide').on('click',function(){
    var val1 = parseInt(document.getElementById('val1').value)
    var val2 = parseInt(document.getElementById('val2').value)
    var sum= val1 / val2
    $('#result').html(val1 / val2)
  })

})
