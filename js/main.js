var sum = document.getElementById('sum');

document.getElementById('calcInput').addEventListener('keypress', function calc(e) {
    var key = e.keyCode;
    //Calculate on "Enter"(13), show result in "sum" and clear input
    if (key === 13) { 
      var calcInput = document.getElementById('calcInput').value;
      sum.innerHTML += calcInput + "=" + eval(calcInput) + "<br>";
      calcInput.value = '';
    }

});