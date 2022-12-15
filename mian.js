let akaki = document.querySelector('.realismi-akaki')
let imgAkaki = document.querySelector('.img-wavwavadze')


let clik = document.querySelector('.click')
let imgAakaki = document.querySelector('.img-akaki')


clik.addEventListener('click', () => {
    if(imgAakaki.style.display = 'none'){
        imgAakaki.style.display = 'block'
    } 
})
let k = document.querySelector('.k');
let j = document.querySelector('.j');
let move = document.querySelector('.move');

k.addEventListener('click', () => {
    if(move.style.marginLeft =  '-500px'){
        move.style.marginLeft = '0px'
    }
    if(move.style.marginLeft =  '0px'){
        move.style.marginLeft = '-500px'
    }
})
j.addEventListener('click', () => {
    if(move.style.marginLeft =  '0px'){
        move.style.marginLeft = '-500px'
    }
    if(move.style.marginLeft =  '-500px'){
        move.style.marginLeft = '0px'
    }
})