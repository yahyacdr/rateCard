let rates = document.querySelectorAll('.rates div')
rates = Array.from(rates)
let submit = document.querySelector('.submit')
let thank = document.querySelector('.thank')
let num = document.querySelector('.rateNum span span')
let ratesArr = []
for (let i = 0; i < rates.length; i++) {
    ratesArr[i] = new Object
    ratesArr[i].rate = rates[i]
    ratesArr[i].clicked = false
}
console.log(ratesArr)
rates.forEach(function(rate){
    rate.onclick = function() {
        console.log(rate)
        rate.style.backgroundColor = 'hsl(217, 12%, 63%)'
        rate.style.color = 'white'
        for (let i = 0; i < rates.length; i++) {
            console.log(ratesArr[i].rate === rate)
            ratesArr[i].rate === rate ?
            ratesArr[i].clicked = true :
            ratesArr[i].clicked = false
        }
        for (let i = 0; i < rates.length; i++) {
            if (ratesArr[i].clicked === false) {
                ratesArr[i].rate.style.backgroundColor = 'hsl(213, 19%, 18%)'
                ratesArr[i].rate.style.color = 'hsl(217, 12%, 63%)'
            }
        }
    }
})
submit.onclick = function() {
    let numRate
    for (let i = 0; i < rates.length; i++){
        if(ratesArr[i].clicked === true) {
            numRate = ratesArr[i].rate.innerText
            thank.style.display = 'flex'
        }
    }
    num.innerText = numRate
}