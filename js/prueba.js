var suma = 0;
function calculo(btn){
    var rand =Math.trunc(Math.random(100)*100);
    suma = suma + rand;
    document.getElementById('pantalla').innerText=suma;
    switch(btn){
        case 1:
            document.getElementById('btn1').innerText=rand
        break;
        case 2:
            document.getElementById('btn2').innerText=rand
        break;
        case 3:
            document.getElementById('btn3').innerText=rand
        break;
        case 4:
            document.getElementById('btn4').innerText=rand
        break;
        case 5:
            document.getElementById('btn5').innerText=rand
        break;
        case 6:
            document.getElementById('btn6').innerText=rand
        break;
        case 7:
            document.getElementById('btn7').innerText=rand
        break;
        case 8:
            document.getElementById('btn8').innerText=rand
        break;
        case 9:
            document.getElementById('btn9').innerText=rand
        break;

    }

}