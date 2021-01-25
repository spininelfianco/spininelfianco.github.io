const compteur = document.getElementById('compteur');

fetch('https://api.countapi.xyz/hit/spininelfianco.github.io/visits')
  .then(data => data.json())
  .then(data => {
  const valeur = data.value;
  console.log(data.value);
  compteur.textContent = valeur;
});