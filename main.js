// button
const button1 = document.getElementById('button-1')
const button2 = document.getElementById('button-2')
const button3 = document.getElementById('button-3')

// box
const box1 = document.querySelector('.block-1-box')
const box2 = document.querySelector('.block-2-box')
const box3 = document.querySelector('.block-3-box')

let animation = new TimelineLite()

// scripting goes below
button1.addEventListener('click', () => {
  animation.to('.block-1-box', 0.5, {borderWidth: 100}).to('.block-1-box', 0.5, {borderWidth: 2})
})

button2.addEventListener('click', () => {
  animation.to('.block-2-box', 0.5, {x:350})
    .to('.block-2-box', 0.5, {x:-500})
    .to('.block-2-box', 0.5, {x:150})
    .to('.block-2-box', 0.5, {x:0})
})

button3.addEventListener('click', () => {
  animation.to('.block-3-box', 0.5, {width: 500})
    .to('.block-3-box', 0.5, {borderWidth: 10})
    .to('.block-3-box', 0.5, {backgroundColor: '#fff'})
    .to('.block-3-box', 0.5, {backgroundColor: 'transparent', width: 100, borderWidth: 2})
})

