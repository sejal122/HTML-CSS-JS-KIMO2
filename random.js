
const divElem = document.querySelectorAll(".circles");

 

document.querySelectorAll('.circles').forEach((v) => {
    v.addEventListener('mouseover', (e) => {
        var r=Math.floor(Math.random() * 255);
        var b=Math.floor(Math.random() * 255);
        var g=Math.floor(Math.random() * 255);
        var rcolor=`rgb(${r},${g},${b})`
             v.style.background = rcolor;
            });
    });
    v.addEventListener('mouseout', (e) => {
v.target.style.opacity=1

  });
  