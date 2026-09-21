let button = document.getElementById('button');
let ageinput = document.getElementById('age');

button.onclick=function(){
    if(ageinput.value>=18){
        alert('سن شما مجاز است');
    }
    if(ageinput.value<18){
        alert('سن شما مجاز نیست');
    }

}