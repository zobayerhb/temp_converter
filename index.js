const celsius = document.querySelector(".celsius")
const fahrenheit = document.querySelector(".fahrenheit")
const kelvin = document.querySelector(".kelvin")
const submit = document.querySelector(".btn")
const wrapper_image = document.querySelector(".wrapper_image")


const conditionImage = {
    extraCold: "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdpbnRlcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    cold: "https://plus.unsplash.com/premium_photo-1670360288525-6373364a9d7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdpbnRlcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    normalCold: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdpbnRlcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    normal: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    warm: "https://images.unsplash.com/photo-1454916286212-0ea211dc68d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FybXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    desert: "https://images.unsplash.com/photo-1547234936-74a4b1ee7f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGRlc2VydHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    muri: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    lava: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGF2YXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

}


let lastEdit = "celsius";

const updateLastEdit = () => {
    celsius.addEventListener("keyup", (e) => {
        lastEdit = 'celsius'
    })
    fahrenheit.addEventListener("keyup", (e) => {
        lastEdit = 'fahrenheit'
    })
    kelvin.addEventListener("keyup", (e) => {
        lastEdit = 'kelvin'
    })
};
updateLastEdit();


const updatedImage = (temp) => {
    if(temp <= -15){
        wrapper_image.setAttribute("src", conditionImage.extraCold)
    }else if(temp > -15 && temp <= 0){
        wrapper_image.setAttribute("src", conditionImage.cold)
    }else if(temp > 0 && temp <= 15){
        wrapper_image.setAttribute("src", conditionImage.normalCold)
    }else if(temp > 15 && temp <= 25){
        wrapper_image.setAttribute("src", conditionImage.normal)
    }else if(temp > 25 && temp <= 35){
        wrapper_image.setAttribute("src", conditionImage.warm)
    }else if(temp > 35 && temp <= 1000){
        wrapper_image.setAttribute("src", conditionImage.desert)
    }else if(temp > 1000){
        wrapper_image.setAttribute("src", conditionImage.lava)
    }else
        wrapper_image.setAttribute("src", conditionImage.muri)
    
}


const convert = (lastEdited) => {
    if(lastEdited == 'celsius'){
        const fValue =  (parseFloat(celsius.value) * 9/5) + 32
        const kValue =  parseFloat(celsius.value) + 273

        fahrenheit.value = Math.floor(fValue) + "°C"
        kelvin.value =  Math.floor(kValue) + " K"
        
    }else if(lastEdited === 'fahrenheit'){
        const cValue =  (parseFloat(fahrenheit.value) - 32) * 5/9
        const kValue =  (parseFloat(fahrenheit.value) - 32) * 5/9 + 273
        
        celsius.value =  Math.floor(cValue) + "°C"
        kelvin.value =  Math.floor(kValue) + "K"

    }else if(lastEdited === 'kelvin'){
        const cValue =  parseFloat(kelvin.value) - 273
        const fValue = (parseFloat(kelvin.value) - 273) * 9/5 + 32
        
        celsius.value =  Math.floor(cValue) + "°C"
        fahrenheit.value =  Math.floor(fValue) + "°F"
    } 
}

submit.addEventListener("click", (e) => {
    convert(lastEdit)

    let temp = 0;
    if(lastEdit == 'celsius'){
        temp = celsius.value
    }else if(lastEdit === 'fahrenheit'){
        temp = (parseFloat(celsius.value) * 9/5) + 32

    }else if(lastEdit === 'kelvin'){
        temp = parseFloat(kelvin.value) - 273
    }
    updatedImage(temp)

})
