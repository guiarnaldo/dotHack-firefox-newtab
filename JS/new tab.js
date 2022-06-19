const scrollMouse = document.body;
const box = document.getElementById('box');
const titleBox = document.getElementById('titleBox');
const subtitle = document.getElementById('textSubtitle');
const carrosel = document.querySelectorAll('#carousel>div');
const icons = document.querySelectorAll('.icons');
const boxLines = document.querySelectorAll('.boxLines');
const iconBox = document.getElementById('iconBox');
const selector = document.getElementById('selector');
const selectorIcon = document.getElementById('selectorIcon');
const selectorLink = document.getElementById('selectorLink');
const optionsMaster = document.getElementById("options");
const optionsTab1 = document.getElementById("options1");
const optionsTab2 = document.getElementById("options2");
const optionsTab3 = document.getElementById("options3");
const optionsBox1 = document.getElementById("optionsBox1");
const optionsBox4 = document.getElementById("optionsBox4");

//Forms constants
const backgroundForm = document.getElementById("backgroundForm");
const backgroundConfirm = document.getElementById("backgroundConfirm");
const setBackground = document.getElementById("setBackground");
const backgroundReset = document.getElementById("backgroundReset");


var backgroundPhoto = localStorage.getItem("backgroundPhoto");
var delay;
var grau = 3600005;
var titlesWheel = 5;
var aux = 0;

var position = [{title: 'News Capture', urlBox: '../icons/news.png', urlIcon: '../icons/news2.png', urlSelector: 'www.google.com'},
{title: 'Community Forum', urlBox: '../icons/news.png', urlIcon: '../icons/news2.png', urlSelector: 'www.reddit.com'},
{title: 'Movie Player', urlBox: '../icons/movie.png', urlIcon: '../icons/movie2.png', urlSelector: 'www.youtube.com'},
{title: 'Accessories', urlBox: '../icons/accessories.png', urlIcon: '../icons/accessories2.png', urlSelector: ''},
{title: 'Data Manager', urlBox: '../icons/data.png', urlIcon: '../icons/data2.png', urlSelector: 'www.google.com'},
{title: 'The World', urlBox: '../icons/theworld.png', urlIcon: '../icons/theworld2.png', urlSelector: 'www.google.com'},
{title: 'Mail Station', urlBox: '../icons/mail.png', urlIcon: '../icons/mail2.png', urlSelector: 'www.gmail.com'},
{title: 'Crimsom VS', urlBox: '../icons/crimsomvs.png', urlIcon: '../icons/crimsomvs2.png', urlSelector: 'www.google.com'}];

//Initial
document.body.style.backgroundImage="url("+backgroundPhoto+")";
//check if key value is null or empty (length = 0)
if(backgroundPhoto===null||backgroundPhoto.length==0) document.body.style.backgroundImage="url(../CSS/AltimitMineOs.jpg)";

scrollMouse.addEventListener('wheel', carouselWheel);
selectorLink.href = "https://"+position[titlesWheel].urlSelector;

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
//
//Options
function optionsOn(){
    optionsMaster.style.transform = "translateY(0%)";
    selector.removeEventListener('click', optionsOn);
    selector.addEventListener('click', optionsOff);
    scrollMouse.removeEventListener('wheel', carouselWheel);
}
function optionsOff(){
    optionsMaster.style.transform = "translateY(100%)";
    selector.removeEventListener('click', optionsOff);
    selector.addEventListener('click', optionsOn);
    scrollMouse.addEventListener('wheel', carouselWheel);
    optionsTab2.style.left = "24.5%";
    optionsTab1.style.backgroundColor = "#7e858c";
    box.style.transform = "translateY(0%)";
    optionsTab3.setAttribute("style", "width:22vh");
    optionsTab3.style.left = "24.5%";
    box.style.opacity = "1";
    box.style.visibility = "visible";
    backgroundForm.style.opacity = "0";
    aux = 0;
}
optionsBox1.addEventListener('click', function optionsSlide(){ //when clicking the background's second option
    optionsTab3.setAttribute("style", "width:66vh");
    optionsTab3.style.left = "calc(24.5% + 22vh)";
    box.style.opacity = "0";
    box.style.visibility = "hidden";
    optionsTab2.style.left = "24.5%";
    box.style.transform = "translateY(0%)";
    backgroundForm.style.opacity = "1";
});

optionsBox4.addEventListener('click', function optionsSlide(){ //when clicking the second option
    if(aux == 0){
        optionsTab2.style.left = "calc(24.5% + 22vh)";
        optionsTab1.style.backgroundColor = "#70777c";
        box.style.transform = "translateY(90%)";
        aux = 1;
    }else{
        optionsTab2.style.left = "24.5%";
        optionsTab1.style.backgroundColor = "#7e858c";
        box.style.transform = "translateY(0%)";
        optionsTab3.setAttribute("style", "width:22vh");
        optionsTab3.style.left = "24.5%";
        box.style.opacity = "1";
        box.style.visibility = "visible";
        backgroundForm.style.opacity = "0";
        aux = 0;
    }
    
});
//Forms
backgroundConfirm.addEventListener('click', function confirm(){ //when clicking the background's second option
    backgroundPhoto = setBackground.value;
    document.body.style.backgroundImage="url("+backgroundPhoto+")";
    localStorage.setItem("backgroundPhoto", backgroundPhoto);
});
backgroundReset.addEventListener('click', function confirm(){ //when clicking the background's second option
    localStorage.removeItem("backgroundPhoto");
    document.body.style.backgroundImage="url(../CSS/AltimitMineOs.jpg)";
});
//Options End
function carouselWheel(evento){
    clearTimeout(delay);
    box.style.opacity = 0;
    selectorIcon.style.opacity = 0;
    if(evento.deltaY<0){
        if(titlesWheel<=0){
            titlesWheel = 7;
        }else{
            titlesWheel--;
            
        } 
        grau = grau + 45;  
    }
    else{
        if(titlesWheel>=7){
            titlesWheel = 0;
            
        }else{
            titlesWheel++;
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
        scrollMouse.removeEventListener('wheel', carouselWheel); //adiciona um delay para a função carouselWheel poder funcionar
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
        titleBox.innerHTML = position[titlesWheel].title;
        box.style.opacity = 1;
        for (let i = 0; i < boxLines.length; i++) {
            boxLines[i].setAttribute("style", "width:calc(93% - "+titleBox.clientWidth +"px");
        }
        subtitle.innerHTML = 'Launch '+position[titlesWheel].title+'.';
        iconBox.style.backgroundImage = "url(" + position[titlesWheel].urlBox +")";
        selectorLink.href = "https://"+position[titlesWheel].urlSelector;
        
        setTimeout(function(){
            selectorIcon.style.backgroundImage = "url(" + position[titlesWheel].urlIcon +")";
            selectorIcon.style.opacity = 1;
        },500);

        setTimeout(function(){ //adiciona o eventlistener novamente
            scrollMouse.addEventListener('wheel', carouselWheel);
            //enable or disable options
            if(titlesWheel == 3) selector.addEventListener('click', optionsOn);
            else selector.removeEventListener('click', optionsOn);
        },1000);

    },500);
}