export let myBody = document.querySelector('body')

export let mySection = document.createElement('section')
export let myFirstDiv = document.createElement('div')
export let myH2 = document.createElement('h2')
export let logo = document.createElement('i')

myBody.appendChild(mySection)
mySection.appendChild(myFirstDiv)
myFirstDiv.appendChild(myH2)
myFirstDiv.appendChild(logo)

myFirstDiv.setAttribute('class','dropdown')
logo.setAttribute('class','fas fa-plus fa-2x')
myH2.innerText = 'Modifier'
myH2.style.color = 'white'
mySection.style.backgroundColor = '#5430D9'
logo.style.color = 'white'