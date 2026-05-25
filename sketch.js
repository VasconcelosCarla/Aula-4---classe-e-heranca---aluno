var quadrado1;
var chao;

function setup() {

  createCanvas(800, 400);

  quadrado1 = new Quadrado(
    200,
    50,
    "red",
    80
  );

  chao = new Quadrado(
    160,
    350,
    "green",
    80
  );

}

function draw() {

  background(220);

  quadrado1.aplicarGravidade();

  if (
    quadrado1.y + quadrado1.tamanho >
    chao.y
  ) {

    quadrado1.y =
      chao.y - quadrado1.tamanho;

    quadrado1.velocidadeY = 0;

  }

  quadrado1.desenhar();
  chao.desenhar();

}
