butt = document.getElementById("target");
butt.style.fontSize = 30;
changefont(1);


function changefont(add) {
    butt = document.getElementById("target");
    //alert(parseInt(butt.style.fontSize));
    if (parseFloat(butt.style.fontSize) == 30) {
        add = 1;
        //butt.style.fontSize = butt.style.fontSize + 1;
    }
    if (parseFloat(butt.style.fontSize) == 35) {
        add = -1;

    }
    butt.style.fontSize = parseFloat(butt.style.fontSize) + add;
    setTimeout("changefont(" + add + ")", 30);
}
