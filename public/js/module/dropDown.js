import {myBody,mySection,myFirstDiv,myH2,logo} from './structureDrop.js'


let range;
let myH3;


for (let a = 0; a < 1; a++) {
    range = document.createElement('ul')
    range.setAttribute('class','row')
    mySection.appendChild(range)
    for (let z = 1; z < 4; z++) {
        myH3 = document.createElement('h3')
        myH3.innerText =`Liste ${z}`
        range.appendChild(myH3)
    }
}

logo.addEventListener('click', () =>{
    range.classList.toggle('row')
})