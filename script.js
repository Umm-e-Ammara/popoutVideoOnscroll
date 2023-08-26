const container = document.querySelector(".container");
const video = document.querySelector(".video");
let videoHeight = video.offsetHeight;
let popOut = true;
container.style.height = videoHeight + "px";
window.addEventListener("scroll", function(){
    if(window.scrollY > videoHeight){
        if(popOut){
            video.classList.add("popout-bottom");
            video.style.bottom = -videoHeight + 'px';
        }
    }else{
        video.classList.remove("popout-bottom");
        video.style.bottom = '0px';
    }
});