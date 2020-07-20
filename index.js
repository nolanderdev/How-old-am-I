let birthday = document.getElementById('birthday')
let button = document.getElementById('button')
let result = document.getElementById('display')

nowDay = new  Date()

button.addEventListener('click',calcDays)

function calcDays(){
let dayBorn = new Date(birthday.value)
let calc = nowDay - dayBorn
calc = calc/1000/60/60/24
result.innerHTML = `you have been alive for ${calc} days`
}
