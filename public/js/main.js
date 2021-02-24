let test = document.querySelectorAll('input')[0]
let test1 = document.querySelectorAll('input')[1]
let test2 = document.querySelectorAll('input')[2]
let test3 = document.querySelectorAll('input')[3]

let btn = document.querySelectorAll('button')[0]
let btn1 = document.querySelectorAll('button')[1]
let btn2 = document.querySelectorAll('button')[2]
let btn3 = document.querySelectorAll('button')[3]

let eleve = document.querySelector('.eleve')

// let garage = localStorage;

let tableau = Array.from(test.value)

// garage.clear()

btn.addEventListener('click', () =>{
    tableau.push(test.value)
    let garage = localStorage;
    garage.setItem('Nom', test.value)
})

btn1.addEventListener('click', () =>{
    tableau.push(test1.value)
    let garage1 = localStorage;
    garage1.setItem('Prenom', test1.value)
})

btn2.addEventListener('click', () =>{
    tableau.push(test2.value)
    let garage2 = localStorage;
    garage2.setItem('Age', test2.value)
})

btn3.addEventListener('click', () =>{
    tableau.push(test3.value)
    let garage3 = localStorage;
    garage3.setItem('Classe', test3.value)
})


// MODAL FONCTIONNALITE
let butPresence = document.querySelector(".butPresence")
let divModal = document.querySelector(".divModal")
let btnX = document.querySelector(".btnX")

butPresence.addEventListener('click', () => {
    divModal.classList.add("d-block")
    divModal.classList.remove("d-none")
    document.body.style.overflow="hidden"
})

btnX.addEventListener('click', () => {
    divModal.classList.add("d-none")
    divModal.classList.remove("d-block")
    document.body.style.overflow="auto"
})














// // variable
// const stag = document.querySelector('.presence-container');
// const listStage = document.querySelector('.presence-list');
// const modalBtn = document.querySelector('.modal-btn')
// const modalBg = document.querySelector('.modal-bg')
// const modalClose = document.querySelector('.modal-close')
// // input
// const prenom = document.querySelector('.prenom-input')
// const nom = document.querySelector('.nom-input');
// const age = document.querySelector('.age-input');
// const classe = document.querySelector('.classe-input')

// // btn
// const ajoutStage = document.querySelector('.add-button');
// const removeStag = document.querySelector('.enlever');
// const refreshStag = document.querySelector('.rafreshir');
// // tout mes input
// const mesInput = document.querySelectorAll('input');

// console.log(mesInput);

// // modal

// modalBtn.addEventListener('click',function(){
//     modalBg.classList.add('bg-active')
// })
// modalClose.addEventListener('click',function(){
//     modalBg.classList.remove('bg-active')
// })




// // ajouter un stagiaire 

// function add(a, b, c, d, key) {
//     let mesStag = {
//         nom: a,
//         prenom: b,
//         age: c,
//         coding: d,
//     }
//     let myObj = JSON.stringify(mesStag);
//     localStorage.setItem(key, myObj);
//     let myObjend = JSON.parse(localStorage.getItem(key)) 

//     console.log(myObjend);

//     let myList = document.createElement('li');
//     myList.innerText = nom.value;
//     myList.classList.add('stagiaire');
//     listStage.appendChild(myList);

//     // bouton de check
//     let checkBtn = document.createElement('input');
//     checkBtn.innerHTML = '<i class="fas fa-check"></i>';
//     checkBtn.setAttribute('type', 'checkbox')
//     checkBtn.classList.add('check-btn');
//     myList.appendChild(checkBtn);

//     // bouton de supprimer
//     let removeBtn = document.createElement('button');
//     removeBtn.innerHTML = '<i class="fas fa-trash"></i> remove';
//     removeBtn.classList.add('remove-btn');
//     myList.appendChild(removeBtn);

//     nom.value = '';
//     prenom.value = ''
//     age.value = '';
//     classe.value = '';

//     removeBtn.addEventListener('click', (e) => {
//         for (let i = 0; i< localStorage.length; i++) {
//             let key = localStorage.key(i);
//             localStorage.removeItem(key);
//             let parentListe = e.target.parentElement;
//             parentListe.remove()
//         }
//     })
// }

// let compteur = 0;
// ajoutStage.addEventListener('click', (e) => {
//     e.preventDefault();
//     let prenomIn = mesInput[0]
//     let nomIN = mesInput[1].value
//     let ageIN = mesInput[2].value
//     let codingIN = mesInput[3].value
//     compteur++
//     add(prenomIn,nomIN, ageIN, codingIN, compteur)
// });

// ajoutStage.addEventListener('keypress', (e) => {
//     if(e.keyCode == 13) {
//         let prenomIn = mesInput[0]
//         let nomIN = mesInput[1].value
//         let ageIN = mesInput[2].value
//         let codingIN = mesInput[3].value
//         compteur++
//         add(prenomIn,nomIN, ageIN, codingIN, compteur)
//     }
// });


// // clear storage/refresh
// removeStag.addEventListener('click', () => {
//     localStorage.clear();
// });

// refreshStag.addEventListener('click', () =>{
//     window.location.reload()
// })




// // filtre 

// // constant
// const filter = document.querySelector(".filter-presence");

// // event listner
// filter.addEventListener("change", filterPresence);



// function filterPresence(e) {
//     const value = e.target.value;
//     const presence = listStage.childNodes;
//     console.log(value);
//     presence.forEach(function (a) {
//     switch (value) {
//             case "tous":
//                     a.style.display = "flex";
//                     break;
//             case "present":
//                     if (a.classList.contains("present")) {
//                     a.style.display = "flex";
//                     } else {
//                     a.style.display = "none";
//                     }
        
//                     break;
//             case "absent":
//                     if (!a.classList.contains("present")) {
//                     a.style.display = "flex";
//                     } else {
//                     a.style.display = "none";
//                     }
//                     break;
//             default:
//                     return;
//             }
// });
// }



