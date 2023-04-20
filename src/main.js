const btn = document.querySelector('#button')
const paragrathName = document.querySelector('#heroname')
const image = document.querySelector('#heroimage')
const idSuperHero = '9106948396042621';
const URL  = `https://www.superheroapi.com/api.php/${idSuperHero}`;
const numberHeros = 800;
const ramdomHero = () => Math.floor(Math.random() * numberHeros);
console.log(ramdomHero())

btn.addEventListener('click', (event) => {
   event.preventDefault();
   const numberHeroId = ramdomHero();
   fetch(`${URL}/${numberHeroId}`)
   .then((resposta) => resposta.json())
   .then((baseDate) => {
      image.src = baseDate.image.url;
      paragrathName.innerHTML = baseDate.name;
   })
   .catch(error => console.error(error))
})
