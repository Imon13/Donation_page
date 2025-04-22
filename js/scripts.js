const noaBtn = document.getElementById('noa-btn').addEventListener('click', function (e) {
    const inputValue = parseInt(e.target.parentNode.childNodes[7].value);
    const noaFinal = parseInt(document.getElementById('noa-ini').innerText);
    const noaDonation = inputValue + noaFinal;
    document.getElementById('noa-ini').innerText = noaDonation;

    const mainDoller = parseInt(document.getElementById('main-doller').innerText);
    const afterDonate = mainDoller - inputValue;
    document.getElementById('main-doller').innerText = afterDonate;
});

const quotaBtn = document.getElementById('quota-btn').addEventListener('click', function (e) {
    const inputValue = parseInt(e.target.parentNode.childNodes[7].value);
    const quotaFinal = parseInt(document.getElementById('quota').innerText);
    const quotaDonation = inputValue + quotaFinal;
    document.getElementById('quota').innerText = quotaDonation;

    const mainDoller = parseInt(document.getElementById('main-doller').innerText);
    const afterDonatequota = mainDoller - inputValue;
    document.getElementById('main-doller').innerText = afterDonatequota;
});

const feniBtn = document.getElementById('feni-btn').addEventListener('click', function (e) {
    const inputValue = parseInt(e.target.parentNode.childNodes[7].value);
    const feniFinal = parseInt(document.getElementById('feni').innerText);
    const feniDonation = inputValue + feniFinal;
    document.getElementById('feni').innerText = feniDonation;

    const mainDoller = parseInt(document.getElementById('main-doller').innerText);
    const afterDonatefeni = mainDoller - inputValue;
    document.getElementById('main-doller').innerText = afterDonatefeni;
});
