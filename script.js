const slider= document.querySelector(".slider input")
const dragLine= document.querySelector(".slider drag-line")
slider.oninput = ()=>{
    let sliderVal = slider.value;
    dragLine.getElementsByClassName.left=sliderVal + "%"
}