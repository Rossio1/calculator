document.getElementById('add').onclick = add
document.getElementById('sub').onclick = subtract
document.getElementById('multi').onclick =  multiply
document.getElementById('divi').onclick = divide


function add(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = val1 + val2
  document.getElementsByTagName('h2')[0].innerHTML = sum
}
function subtract(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = val1 - val2
  document.getElementsByTagName('h2')[0].innerHTML = sum
}
function multiply(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = val1 * val2
  document.getElementsByTagName('h2')[0].innerHTML = sum
}
function divide(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = val1 / val2
  document.getElementsByTagName('h2')[0].innerHTML = sum
}
