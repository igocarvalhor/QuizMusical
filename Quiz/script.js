let score = 0;

const perguntas = [
  {
    pergunta: "Qual Clave se inicia na segunda linha e indica a nota sol na partitura?",
    opcoes: ["Clave de Dó", "Clave de Mi", "Clave de Fá", "Clave de Sol", "Clave de Ré"],
    resposta: 3
  },

  {
    pergunta: "Como se chama as cinco linhas e os quatro espaços onde se escreve as notas musicais?",
    opcoes: ["Clave", "Pentagrama", "Melodia", "Musical"],
    resposta: 1
  },

  {
    pergunta: "Qual figura musical tem a duração de quatro tempos?",
    opcoes: ["Semicolcheia", "Semibreve", "Seminíma", "Semifusa"],
    resposta: 1
  },
];


function apresentarPergunta(pergunta) {
  console.log(pergunta.pergunta);
  for (let i = 0; i < pergunta.opcoes.length; i++) {
    console.log(`${i + 1}) ${pergunta.opcoes[i]}`);
  }
  const resposta = parseInt(prompt("Digite o número da resposta correta:"));
  switch (resposta) {
    case pergunta.resposta + 1:
      console.log("Resposta correta!");
      score++;
      break;
    default:
      console.log("Resposta incorreta.");
      break;
  }
}

for (let i = 0; i < perguntas.length; i++){
  apresentarPergunta(perguntas[i]);
}

console.log(`Sua pontuação final é ${score}/${perguntas.length}.`);
