let red = 0, green = 0, blue = 0;



function degisim(){
red = document.getElementById("colorRed").value;
green = document.getElementById("colorGreen").value;
blue = document.getElementById("colorBlue").value;
document.getElementById("box").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}