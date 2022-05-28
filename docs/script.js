const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))

downButton.addEventListener('click', () => changeSlide('down'))


const changeSlide = (direction) => {
	const sliderHeight = sliderContainer.clientHeight
	if(direction === 'up') {
		activeSlideIndex++
		if (activeSlideIndex>slidesLength-1) {
			activeSlideIndex=0
		}
	} else if(direction === 'down') {
		activeSlideIndex--
		if (activeSlideIndex<0) {
			activeSlideIndex= slidesLength - 1
		}
	}

	slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px`
	slideLeft.style.transform = `translateY(${activeSlideIndex*sliderHeight}px`
}


const loadText = document.querySelector('.loading-text');
const bg  = document.querySelector('.bg');

let load=0;

let int = setInterval(blurring, 30) 

function blurring() {
	load++

	if (load>99){
		clearInterval(int)
	}

	loadText.innerText = `${load}%`
	loadText.style.opacity = scale(load, 0, 100, 1, 0)

	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
	if (load == 100){
		loadText.remove()
	}
}

const scale = (num, imin, imax, omin, omax) => {
	return (num - imin) * (omax - omin) / (imax - imin) + omin;
}


