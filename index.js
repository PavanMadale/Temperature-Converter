const user_input = document.getElementById('user_input')

const msg=document.getElementById('msg')

const options = document.getElementById('options')

const btn = document.getElementById('btn')

const result = document.getElementById('result')

btn.addEventListener('click', () => {
    let value = user_input.value
    const selected_option = options.value
    if (!value) {
        msg.style.display='block'
        setTimeout(()=>{
            msg.style.display='none'

        },3000)
    } else {
        if (selected_option === 'celsius') {
            let celsius = (value - 32) * 5 / 9
            result.innerHTML = `<h1>Celsius = ${parseFloat(celsius).toFixed(4)} °C</h1>`
        } else {
            let fahrenheit = value * (9 / 5) + 32
            result.innerHTML = `<h1>Fahrenheit = ${parseFloat(fahrenheit).toFixed(4)} °F</h1>`
        }
        user_input.value = ""
    }
})