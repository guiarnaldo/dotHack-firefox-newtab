var scrollMouse = document.body;
var caixa = document.getElementById('caixa');
var tituloCaixa = document.getElementById('tituloCaixa');
var legenda = document.getElementById('textoLegenda');
var carrosel = document.querySelectorAll('#icones>div');
var imagens = document.querySelectorAll('.imagens');
var linhas = document.querySelectorAll('.linhas');
var delay;

scrollMouse.addEventListener('wheel', roda);
var grau = 3600005;
var titulos = ['The World','Mail Station','Crimsom VS', 'News Capture', 'Community Forum', 'Movie Player', 'Accessories', 'Data Manager'];
var titulosRoda = 0;

for (let i = 0; i < carrosel.length; i++) {
    carrosel[i].style.transform = "rotateY(calc("+grau+"deg + 22.5deg*var(--i))) translateX(220%)";
}
for (let i = 0; i < carrosel.length; i++) {
    if(i>=8){
        imagens[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg) scale(0.3)";
    }else{
        imagens[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg)";
    }
}



function roda(evento){
    clearTimeout(delay);
    caixa.style.opacity = 0;
    if(evento.deltaY<0){
        if(titulosRoda>=titulos.length-1){
            titulosRoda = 0;
            
        }else{
            titulosRoda++;
        }
        grau = grau + 45;  
    }
    else{
        if(titulosRoda<=0){
            titulosRoda = titulos.length-1;
        }else{
            titulosRoda--;
            
        }
        grau = grau - 45;
         
    }
    for (let i = 0; i < carrosel.length; i++) {
        if(evento.deltaY>0) carrosel[i].style.transform = "rotateY(calc("+grau+"deg - 15deg + 22.5deg*var(--i))) translateX(220%)";
        else carrosel[i].style.transform = "rotateY(calc("+grau+"deg + 15deg + 22.5deg*var(--i))) translateX(220%)";
    }
    for (let i = 0; i < imagens.length; i++) {
        if(i>=8){
            imagens[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg) scale(0.3)";
        }else{
            imagens[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg)";
        }
    }
    delay = setTimeout(function(){
        scrollMouse.removeEventListener('wheel', roda); //adiciona um delay para a função roda poder funcionar
        //novamente enquando a animação de bounce é feita
        for (let i = 0; i < imagens.length; i++) {
            if(evento.deltaY>0) carrosel[i].animate([
                {transform: "rotateY(calc("+grau+"deg - 15deg + 22.5deg*var(--i))) translateX(220%)", easing: 'ease-out'},
                {transform: "rotateY(calc("+grau+"deg + 7deg + 22.5deg*var(--i))) translateX(220%)", easing: 'ease-out'},
                {transform: "rotateY(calc("+grau+"deg + 22.5deg*var(--i))) translateX(220%)", easing: 'ease-in'},
            ], {duration: 1000});
            else carrosel[i].animate([
                {transform: "rotateY(calc("+grau+"deg + 15deg + 22.5deg*var(--i))) translateX(220%)", easing: 'ease-out'},
                {transform: "rotateY(calc("+grau+"deg - 7deg + 22.5deg*var(--i))) translateX(220%)", easing: 'ease-out'},
                {transform: "rotateY(calc("+grau+"deg + 22.5deg*var(--i))) translateX(220%)", easing: 'ease-in'},
            ], {duration: 1000});
        }
        for (let i = 0; i < carrosel.length; i++) {
            carrosel[i].style.transform = "rotateY(calc("+grau+"deg + 22.5deg*var(--i))) translateX(220%)";
        }
        tituloCaixa.innerHTML = titulos[titulosRoda];
        caixa.style.opacity = 1;
        for (let i = 0; i < linhas.length; i++) {
            linhas[i].setAttribute("style", "width:calc(93% - "+tituloCaixa.clientWidth +"px");
        }
        legenda.innerHTML = 'Launch '+titulos[titulosRoda]+'.';

        setTimeout(function(){ //adiciona o eventlistener novamente
            scrollMouse.addEventListener('wheel', roda);
        },1000);

    },500);
}