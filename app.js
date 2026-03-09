
const dropZone = document.getElementById("drop-zone")
const fileInput = document.getElementById("fileInput")
const beforeImg = document.getElementById("beforeImg")
const afterImg = document.getElementById("afterImg")

dropZone.onclick = () => fileInput.click()

fileInput.onchange = e => {

const file = e.target.files[0]

const url = URL.createObjectURL(file)

beforeImg.src = url
afterImg.src = url

}


const slider = document.getElementById("slider")

slider.oninput = function(){

const val = this.value

afterImg.style.clipPath = `inset(0 ${100-val}% 0 0)`

}


document.getElementById("enhanceBtn").onclick = () => {

alert("Connect AI model here (Real-ESRGAN ONNX)")

}
