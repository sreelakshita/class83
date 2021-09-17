
var lpx,lpy;
canvas = document.getElementById("mycanvas");
 cty=canvas.getContext("2d");

color= "pink";
width =3;

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    lpx=e.touches[0].clientX -canvas.offsetLeft;
    lpy=e.touches[0].clientY -canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    cpx=e.touches[0].clientX-canvas.offsetLeft;
    cpy=e.touches[0].clientY-canvas.offsetTop

    
    cty.beginPath();
    cty.strokeStyle =color;
    cty.lineWidth = width;
    cty.moveTo(lpx,lpy);
    cty.lineTo(cpx,cpy);
    cty.stroke();
    lpx=cpx;
    lpy=cpy;
    
}





