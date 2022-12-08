//Lista Carros
let xCarros = [600,600,600,600,600,600]
let yCarros = [40,96,150,210,270,318]
let velocidades = [2,3,2.5,5,3.3,2.3]
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for(let i = 0;i < imagemCarros.length;i += 1){
        image(imagemCarros[i],xCarros[i],yCarros[i],50,40);
        print("O valr do i nesta repetição é" + i)
    }

}

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i += 1){
        xCarros[i] -= velocidades[i];
    }

}

function voltaInicial(){
    for(let i = 0;i < imagemCarros.length;i+=1){
        if (xCarros[i] <-50){
            xCarros[i] = 600;
        }
    }   
}