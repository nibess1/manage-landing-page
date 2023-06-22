const carousel = document.querySelector('.carousel');
const radio = document.querySelectorAll('.radio')


let draggable = false;
let initialPosition = 0;
let percentageMoved = 0;
let newPos = carousel.dataset.final;
let toMove;

const dragger = (e) => {
    if(!draggable){return}
    e.preventDefault();
    newPos = e.clientX || e.touches[0].clientX;
    percentageMoved = ((newPos - initialPosition)/carousel.clientWidth) *100;
    toMove = percentageMoved + parseInt(carousel.dataset.final, 10)

    if(window.innerWidth <= 550) {
        if(percentageMoved >= 6)
        toMove = 25.1666 + parseInt(carousel.dataset.final, 10)
        else if( percentageMoved <= -6)
        toMove = -25 + parseInt(carousel.dataset.final, 10)

        if(Math.abs(percentageMoved) < 6 ){
            toMove -= percentageMoved;
        }

        if(toMove >= 0){toMove = 0;}
        if(toMove <= -75.5){toMove = -75.5;}
        carousel.style.translate = `${toMove}%  0`;
        console.log(toMove)
        const selector = Math.floor(Math.abs( toMove / 23 ));
        console.log(selector)
        radio.forEach((ele, index) => {if(index !== selector){
            ele.style.border = `3px solid #FFF`
        }else{
            ele.style.border = `3px solid #FF5722`
        }
    
        })
    }else{

    if(toMove >= 10){toMove = 10;}
    if(toMove <= -40){toMove = -40;}}
    carousel.style.translate = `${toMove}%  0`
  
}

const stopper =() => {
    draggable = false;
    carousel.dataset.final = toMove;
}

const checker = (e) => {
    draggable = true;
    initialPosition = e.clientX || e.touches[0].clientX;

}


carousel.addEventListener("mousedown", checker);
carousel.addEventListener("mousemove", dragger);
window.addEventListener("mouseup", stopper);

carousel.addEventListener("touchstart", checker);
carousel.addEventListener("touchmove", dragger);
window.addEventListener("touchend", stopper);

// mobile nav control


const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const cover = document.querySelector('.cover')

menuBtn.addEventListener('click', () => {
    if(window.clientWidth >= 800){
        menuBtn.style.display = none;
        return
    }
    cover.style.display = 'block';
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    cover.style.display = 'none'
    menuBtn.style.display = 'block'
    closeBtn.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if(e.target === cover) {
        cover.style.display = 'none'
        menuBtn.style.display = 'block'
        closeBtn.style.display = 'none'
    }
})


