const sliderItems = Array.from(document.getElementsByClassName('slider-item'))
const arrows = Array.from(document.getElementsByClassName('slider-arrow'))

let count = 0;
let length = sliderItems.length

for (let i = 0; i < sliderItems.length; i++){
    arrows[i].addEventListener('click', function(e){
        if (arrows[i].classList.contains('next-arrow')){
            nextSlide()
        }
        else{
            prevSlide()
        }
        e.preventDefault();
    })
}

function nextSlide(){
    sliderItems[count].classList.remove('slider-item_active')
    count++
    if (count < sliderItems.length){
        sliderItems[count].classList.add('slider-item_active')
    }
    else{
        count = 0;
        sliderItems[count].classList.add('slider-item_active')
    }
}

function prevSlide(){
    sliderItems[count].classList.remove('slider-item_active')
    count--
    if (count >= 0){
        sliderItems[count].classList.add('slider-item_active')
    }
    else{
        count += length
        sliderItems[count].classList.add('slider-item_active')
    }
}