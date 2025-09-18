const romanticWords = [
  { kata: "cinta", clue: "Perasaan mendalam yang tulus" },
  { kata: "sayang", clue: "Perasaan hangat kepada seseorang" },
  { kata: "rindu", clue: "Perasaan ingin bertemu" }
];
let currentWord = 0;
let score = 0;

document.getElementById('btnStart').addEventListener('click', () => {
  currentWord = 0;
  score = 0;
  document.getElementById('score').innerText = score;
  document.getElementById('level').innerText = currentWord + 1;
  document.getElementById('clue').innerText = romanticWords[currentWord].clue;
  document.getElementById('message').innerText = "";
});

document.getElementById('btnCheck').addEventListener('click', () => {
  const ans = document.getElementById('answer').value.toLowerCase();
  if (ans === romanticWords[currentWord].kata) {
    score += 10;
    document.getElementById('message').innerText = "Benar! +10 poin 🎉";
    currentWord++;
    if (currentWord < romanticWords.length) {
      document.getElementById('level').innerText = currentWord + 1;
      document.getElementById('clue').innerText = romanticWords[currentWord].clue;
      document.getElementById('answer').value = "";
    } else {
      document.getElementById('message').innerText = "Selamat! Kamu menyelesaikan semua level!";
    }
    document.getElementById('score').innerText = score;
  } else {
    document.getElementById('message').innerText = "Coba lagi! 💕";
  }
});
