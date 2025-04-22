const noaBtn = document.getElementById('noa-btn').addEventListener('click', function (e) {
    console.log('click')
    console.log(e.target.parentNode.childNodes[7].value);
    const inputValue = parseInt(e.target.parentNode.childNodes[7].value)
    console.log(typeof inputValue);
    const noaFinal = parseInt(document.getElementById('noa-ini').innerText)
    console.log(typeof noaFinal);
    const noaDonation = inputValue + noaFinal
    document.getElementById('noa-ini').innerText = noaDonation
    const mainDoller = parseInt(document.getElementById('main-doller').innerText)
    console.log(mainDoller)
    const afterDonate = mainDoller - noaDonation
    document.getElementById('main-doller').innerText = afterDonate



})