import { heroImage } from './helpers/fetchFunctions';
import { heroName } from './helpers/fetchFunctions';

const btn = document.querySelector('#button')
const paragrathName = document.querySelector('#heroname')
const image = document.querySelector('#heroimage')

btn.addEventListener('click', () => {
   const response =  heroImage();
   console.log(response);
})