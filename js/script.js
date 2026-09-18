let inputnumber = document.getElementById("inputnumber")
let inputpassword = document.getElementById("inputpassword")
let loginbtn = document.getElementById("loginbtn")
let logingpart = document.getElementById("logingpart")
let cardpart = document.getElementById("cardpart")
let addmoneybtn = document.getElementById("addmoneybtn")
let cashoutbtn = document.getElementById("cashoutbtn")
let addmoneyinput = document.getElementById("addmoneyinput")
let cashoutinput = document.getElementById("cashoutinput")
let addmoney = document.getElementById("addmoney")
let cashout = document.getElementById("cashout")
let addbalance = document.getElementById("addbalance")
let cashoutbalance = document.getElementById("cashoutbalance")
let current = document.getElementById("current")

loginbtn.addEventListener('click', () => {

    if (inputnumber.value == "1234" && inputpassword.value == "123") {
        logingpart.style.display = "none"
        cardpart.removeAttribute('hidden')
    }

    else {
        alert('type this number: 1234 or Password:123')
    }
})

addmoneybtn.addEventListener('click', () => {
    addmoneyinput.removeAttribute('hidden')
    cashoutinput.setAttribute('hidden', true)
})

cashoutbtn.addEventListener('click', () => {
    cashoutinput.removeAttribute('hidden')
    addmoneyinput.setAttribute('hidden', true)
})

addmoney.addEventListener('click', () => {
    if (addbalance.value == "") {
        alert('please enter your add amount')
        return
    }

    let kss = parseInt(current.innerText)
    let ks = parseInt(addbalance.value)
    current.innerText = kss + ks
    addbalance.value = ""

})


cashout.addEventListener('click', () => {
    if (cashoutbalance.value == "") {
        alert('please enter your cashout amount')
        return
    }

    let kss = parseInt(current.innerText)
    let ks = parseInt(cashoutbalance.value)
    current.innerText = kss - ks
    cashoutbalance.value = ""

})



