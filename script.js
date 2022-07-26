import axios from "axios";

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3f528120e9msh55db7696d2bc256p1e3765jsna12e13206f9b',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
  }
};

// url: 'https://ip-geolocation-and-threat-detection.p.rapidapi.com/192.168.1.1')

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`)
    .then(res => res.json())
    .catch(err => console.error(err))
}

// Get form data of input, $ = dom element
const $form = document.querySelector('#form')
const $input = document.querySelector('#input')

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    // get input value ;)
    const {value} = $input;

    // Add validations
    if(!value) return
})