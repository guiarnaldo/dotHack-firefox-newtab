var scrollMouse = document.body;
var tituloCaixa = document.getElementById('tituloCaixa');
var legenda = document.getElementById('textoLegenda');
var carrosel = document.querySelectorAll('#icones>div');


var imagens = document.querySelectorAll('.imagens');

scrollMouse.addEventListener('wheel', roda);
var grau = 3600007.5;
var titulos = ['The World','Mail Station','Crimsom VS', 'News Capture', 'Community Forum', 'Movie Player', 'Accessories', 'Data Manager'];
var titulosRoda = 0;

for (let i = 0; i < carrosel.length; i++) {
    carrosel[i].style.transform = "rotateY(calc("+grau+"deg + 22.5deg*var(--i))) translateX(300%)";
}
for (let i = 0; i < carrosel.length; i++) {
    if(i>=8){
        imagens[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg) scale(0.5)";
    }else{
        imagens[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg)";
    }
}



function roda(evento){
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
        carrosel[i].style.transform = "rotateY(calc("+grau+"deg + 22.5deg*var(--i))) translateX(300%)";
    }
    for (let i = 0; i < carrosel.length; i++) {
        if(i>=8){
            imagens[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg) scale(0.5)";
        }else{
            imagens[i].style.transform = "rotateY(calc(-"+grau+"deg - 22.5deg*var(--i))) rotateX(25deg)";
        }
    }
    tituloCaixa.innerHTML = titulos[titulosRoda];
    legenda.innerHTML = 'Launch '+titulos[titulosRoda]+'.';
}