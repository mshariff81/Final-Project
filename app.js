const scriptURL = 'https://script.google.com/macros/s/AKfycbw_Hkdq5Syrwona-SH2r3QuQhsADvQRgRg2nv_GkEXaLpnPSPI/exec'
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            //This is where you write your code


            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
})