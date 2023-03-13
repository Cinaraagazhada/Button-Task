const onBtn = document.getElementById("on")
const light = document.getElementById("light")
const off = document.getElementById("off")

onBtn.addEventListener("click",function(){
    light.style.backgroundColor="yellow";

})
off.addEventListener("click",function(){
    light.style.backgroundColor="white";

})