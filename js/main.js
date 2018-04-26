var sum = document.getElementById('sum');
//Hide Scrollbar in result box(sum)
sum.style.paddingRight = sum.offsetWidth - sum.clientWidth + "px";

document.getElementById('calcInput').addEventListener('keypress', function calc(e) {
    var key = e.keyCode;

    //Calculate on "Enter"(13), show result in "sum"
    if (key === 13) { 
      var calcInput = document.getElementById('calcInput').value;
      sum.innerHTML += calcInput + "=" + eval(calcInput) + "<br>";

      //Autoscroll result box (sum)
      sum.scrollTop = sum.scrollHeight;

    }

});