const scrollMouse = document.body;
const box = document.getElementById('box');
const titleBox = document.getElementById('titleBox');
const subtitle = document.getElementById('textSubtitle');
const carrosel = document.querySelectorAll('#carousel>div');
const icons = document.querySelectorAll('.icons');
const boxLines = document.querySelectorAll('.boxLines');
const iconBox = document.getElementById('iconBox');
const selectorIcon = document.getElementById('selectorIcon');
var delay;
var grau = 3600005;
var titlesRoda = 5;
var posicao = [{title: 'News Capture', urlBox: '../icons/news.png', urlIcon: '../icons/news2.png'},
{title: 'Community Forum', urlBox: '../icons/news.png', urlIcon: '../icons/news2.png'},
{title: 'Movie Player', urlBox: '../icons/movie.png', urlIcon: '../icons/movie2.png'},
{title: 'Accessories', urlBox: '../icons/accessories.png', urlIcon: '../icons/accessories2.png'},
{title: 'Data Manager', urlBox: '../icons/data.png', urlIcon: '../icons/data2.png'},
{title: 'The World', urlBox: '../icons/theworld.png', urlIcon: '../icons/theworld2.png'},
{title: 'Mail Station', urlBox: '../icons/mail.png', urlIcon: '../icons/mail2.png'},
{title: 'Crimsom VS', urlBox: '../icons/crimsomvs.png', urlIcon: '../icons/crimsomvs2.png'}];

scrollMouse.addEventListener('wheel', roda);

for (let i = 0; i < carrosel.length; i++) {
    carrosel[i].style.transform = "rotateY(calc("+grau+"deg + 22.5deg*var(--i))) translateX(70vh)";
}
for (let i = 0; i < carrosel.length; i++) {
    if(i>=8){
        icons[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg) scale(0.3)";
    }else{
        icons[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg)";
    }
}



function roda(evento){
    clearTimeout(delay);
    box.style.opacity = 0;
    selectorIcon.style.opacity = 0;
    if(evento.deltaY<0){
        if(titlesRoda<=0){
            titlesRoda = 7;
        }else{
            titlesRoda--;
            
        } 
        grau = grau + 45;  
    }
    else{
        if(titlesRoda>=7){
            titlesRoda = 0;
            
        }else{
            titlesRoda++;
        }
        grau = grau - 45;
         
    }
    for (let i = 0; i < carrosel.length; i++) {
        if(evento.deltaY>0) carrosel[i].style.transform = "rotateY(calc("+grau+"deg - 15deg + 22.5deg*var(--i))) translateX(70vh)";
        else carrosel[i].style.transform = "rotateY(calc("+grau+"deg + 15deg + 22.5deg*var(--i))) translateX(70vh)";
    }
    for (let i = 0; i < icons.length; i++) {
        if(i>=8){
            icons[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg) scale(0.3)";
        }else{
            icons[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg)";
        }
    }
    delay = setTimeout(function(){
        scrollMouse.removeEventListener('wheel', roda); //adiciona um delay para a função roda poder funcionar
        //novamente enquando a animação de bounce é feita
        for (let i = 0; i < icons.length; i++) {
            if(evento.deltaY>0) carrosel[i].animate([
                {transform: "rotateY(calc("+grau+"deg - 12deg + 22.5deg*var(--i))) translateX(70vh)", easing: 'ease-out'},
                {transform: "rotateY(calc("+grau+"deg + 5deg + 22.5deg*var(--i))) translateX(70vh)", easing: 'ease-out'},
                {transform: "rotateY(calc("+grau+"deg + 22.5deg*var(--i))) translateX(70vh)", easing: 'ease-in'},
            ], {duration: 1000});
            else carrosel[i].animate([
                {transform: "rotateY(calc("+grau+"deg + 12deg + 22.5deg*var(--i))) translateX(70vh)", easing: 'ease-out'},
                {transform: "rotateY(calc("+grau+"deg - 5deg + 22.5deg*var(--i))) translateX(70vh)", easing: 'ease-out'},
                {transform: "rotateY(calc("+grau+"deg + 22.5deg*var(--i))) translateX(70vh)", easing: 'ease-in'},
            ], {duration: 1000});
        }
        for (let i = 0; i < carrosel.length; i++) {
            carrosel[i].style.transform = "rotateY(calc("+grau+"deg + 22.5deg*var(--i))) translateX(70vh)";
        }
        titleBox.innerHTML = posicao[titlesRoda].title;
        box.style.opacity = 1;
        for (let i = 0; i < boxLines.length; i++) {
            boxLines[i].setAttribute("style", "width:calc(93% - "+titleBox.clientWidth +"px");
        }
        subtitle.innerHTML = 'Launch '+posicao[titlesRoda].title+'.';
        iconBox.style.backgroundImage = "url(" + posicao[titlesRoda].urlBox +")";
       
        
        setTimeout(function(){
            selectorIcon.style.backgroundImage = "url(" + posicao[titlesRoda].urlIcon +")";
            selectorIcon.style.opacity = 1;
        },500);

        setTimeout(function(){ //adiciona o eventlistener novamente
            scrollMouse.addEventListener('wheel', roda);
        },1000);

    },500);
}