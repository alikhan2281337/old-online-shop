function Check(){
    var input1 = document.getElementById('input-name').value;
    var input2 = document.getElementById('input-email').value;
    var error1 = document.getElementById('p1');
    var error2 = document.getElementById('p2');
    var error3 = document.getElementById('p3');
    if(input1.length < 3){
        error1.innerHTML = "Here is nothing to submit"
        error1.style.color = 'red'
    }
    else{
        error1.innerHTML = 'ok'
        error1.style.color = 'green'
    }
    if(input2.length < 5){
        error2.innerHTML = "Less than 5 symbols"
    }
   
    
}