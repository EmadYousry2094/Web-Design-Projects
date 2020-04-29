

let header = document.querySelector('.headerSec'),
    navBar = document.querySelector('.navBar'),
    projectImage = Array.from (document.querySelectorAll('.mix img')),
    quot = Array.from (document.querySelectorAll('.testimonials div q')),
    quotName = Array.from (document.querySelectorAll('.testimonials div span'));

/* initialize header slider */ 
sliderInit(navBar.clientWidth,(window.innerHeight-navBar.clientHeight));


header.style.height = window.innerHeight+'px';
   
 window.onresize = function () {
    sliderInit(navBar.clientWidth,(window.innerHeight-navBar.clientHeight));
     header.style.height = window.innerHeight+'px';
 };   
       
/* initialize projects shuffle  */
mixitup('.mixContainer');


var x = 0;

quot[x].style.opacity = '1';
quotName[x].style.opacity = '1';

setInterval(()=>{

    quot[x].style.opacity = '0';
    quotName[x].style.opacity = '0';
    x++;
},6000);


quot.forEach((item)=>{

    item.addEventListener('transitionend',()=>{
        
        console.log(x);
        if(5 === x){
            x = 0;
        }
        quot[x].style.opacity = '1';
        
    });
});

quotName.forEach((item)=>{

    item.addEventListener('transitionend',()=>{
        
        console.log(x);
        if(5 === x){
            x = 0;
        }
        quotName[x].style.opacity = '1';
        
    });
});

