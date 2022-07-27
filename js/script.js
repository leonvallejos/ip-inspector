const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3f528120e9msh55db7696d2bc256p1e3765jsna12e13206f9b',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
  }
};

// url: 'https://ip-geolocation-and-threat-detection.p.rapidapi.com/192.168.1.1')

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
}

// No repeat code
// const $ = selector => document.querySelectorAll(selector)

// Get form data of input, $ = dom element
const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')

// render ipInfo and results
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // get input value ;)
    const {value} = $input;

    // Add validations
    if(!value) return

    // Set new attributes for submit
    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', true) // pico.css framework loading

    // get info about IP
    const ipInfo = await fetchIpInfo(value) // async function

    // render info
    if(ipInfo){
        // apiInfo to JSON
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    // Full loading
    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')

})


