let servContent = Array.from(document.querySelectorAll(".services .serv .content")),
    mixContainer = Array.from(document.querySelectorAll(".featured .mixContainer .content")),
    infoContent = Array.from(document.querySelectorAll(".info .content"));

    var mixitup = mixitup('.mixContainer');

servContent.forEach(item =>{
    item.addEventListener('mouseenter',function(){
        item.style.backgroundColor = '#ed1d24';
        item.style.color = '#fff';
        item.children[0].style.backgroundColor = '#fff';
        item.children[0].style.color = '#ed1d24';
    });

    item.addEventListener('mouseleave',function(){
        item.style.backgroundColor = '#fff';
        item.style.color = '#08526D';
        item.children[0].style.backgroundColor = '#ed1d24';
        item.children[0].style.color = '#fff';
    });
});


mixContainer.forEach(item =>{
    item.addEventListener('mouseenter',function(){
        item.style.cursor = 'pointer';
        item.children[0].style.backgroundColor ='rgba(0, 0, 0, 0.9)';
        item.children[0].children[0].style.color ='#ed1d24';
        item.children[0].children[1].style.color ='#fff';
        item.children[1].style.border = '1px solid #bab4b4';
        
    });

    item.addEventListener('mouseleave',function(){
        item.children[0].style.backgroundColor ='rgba(0, 0, 0, 0)';
        item.children[0].children[0].style.color ='transparent';
        item.children[0].children[1].style.color ='transparent';
        item.children[1].style.border = '1px solid transparent';
    });
});

infoContent.forEach(item =>{
    item.addEventListener('mouseenter',function(){
        item.style.backgroundColor   ='#ed1d24';
        item.children[0].style.color ='#fff';
        item.children[1].style.color ='#fff';
        item.children[2].style.color ='#fff'; 
    });

    item.addEventListener('mouseleave',function(){
        item.style.backgroundColor   ='#fff';
        item.children[0].style.color ='#08526D';
        item.children[1].style.color ='#08526D';
        item.children[2].style.color ='#ed1d24'; 
    });
});