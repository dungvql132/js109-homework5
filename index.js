// async function getUser(){
//     let predata = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=e482e115c330863e0fd322f110e2dd03')
//     let data = await predata.json()

//     console.log(data)
//     data.data.forEach()

//     //return data
// }

// let form = document.querySelector('#input')
// console.log(form)
// form.onsubmit = (Event) =>{
//     Event.preventDefault();
//     let city = form.city.value
//     console.log(city)
// }

// let myPromise = new Promise((resolve,reject) => {
//     reject();
// }) 
// console.log(myPromise)
// myPromise.then(() =>{
//     console.log('aaaaaa')
// }).catch(() =>{
//     console.log('bbbbbb');
// })

// let data = fetch('https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=e482e115c330863e0fd322f110e2dd03')

// data.then((data) => {
//     console.log('da nhan data');
//     console.log(data)
// }).catch(() => {
//     console.log('ko')
// })

//const axios = require('axios');
// let x = '10';
// let getData = async(city) => {
//     try {       
//         let respone = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e482e115c330863e0fd322f110e2dd03`)
//         console.log(respone.data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getData('Amsterdam')

let input_form = document.getElementById('input_form')
// let appear_form = document.getElementById('appear_form')

// console.log(input_form);
// console.log(appear_form);

input_form.addEventListener('submit' , (E) =>{
    E.preventDefault()
    let pickedCity;
    pickedCity = input_form.inputTXT.value;
    // console.log(pickedCity);
    load(pickedCity)
})

async function load(city) {
    try {
        let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e482e115c330863e0fd322f110e2dd03`)
        console.log(weatherData.data)
        let data = weatherData.data;

        let review = document.getElementById('review')
        review.innerHTML = data.weather[0].description

        let imgWEA = document.getElementById('imgWEA')
        imgWEA.src = `icons/${data.weather[0].icon}.png`

        let temp = document.getElementById('temp')
        temp.innerHTML = data.main.temp + 'F'

        let nameCity = document.getElementById('city')
        nameCity.innerHTML = data.name

    } catch (error) {
        alert('nhap sai')
    }
}