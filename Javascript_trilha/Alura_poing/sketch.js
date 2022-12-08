//Variáveis Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis Raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90
let colidiu = false;

//Variáveis do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function setup(){
    createCanvas(600,400);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete,yRaquete);
    mostraRaquete(xRaqueteOponente,yRaqueteOponente)
    movimentaMiinhaRaquete();
    verificaCOlisaoRaquete(xRaquete,yRaquete);
    movimentaRaqueteOponente();
    verificaCOlisaoRaquete(xRaqueteOponente,yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
}

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete(X,Y){
    rect(X,Y,raqueteComprimento,raqueteAltura);
}


function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function movimentaMiinhaRaquete(){
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete +=10
    }
}

function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function verificaColisaoBorda(){
    if (xBolinha + raio> width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio> height || yBolinha - raio< 0) {
        velocidadeYBolinha *= -1;
    }
}


function verificaCOlisaoRaquete(X,Y){
    colidiu = collideRectCircle(X,Y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if(colidiu){
        velocidadeXBolinha *= -1;
    }
}

function incluiPlacar(){
    fill(255)
    text(meusPontos, 278, 26)
    text(pontosOponente, 321, 26)
}

function marcaPonto(){
    if(xBolinha > 590){
        meusPontos +=1;
    }
    if(xBolinha < 10){
        pontosOponente += 1
    }
}
