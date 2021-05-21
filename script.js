async function refresh() {
    const url = 'https://api.apify.com/v2/key-value-stores/yaPbKe9e5Et61bl7W/records/LATEST?disableRedirect=true';
    const response = await fetch(url)
    const data = await response.json()


    const total = document.querySelector('#total')
    const recovered = document.querySelector('#recovered')
    const active = document.querySelector('#active')
    const deaths = document.querySelector('#deaths')
    const stable = document.querySelector('#stable')
    const critical = document.querySelector('#critical')
    const community = document.querySelector('#community')
    const updated = document.querySelector('#updated')

    total.innerHTML = data.infected;
    recovered.innerHTML = data.discharged;
    active.innerHTML = data.activeCases;
    deaths.innerHTML = data.deceased;
    stable.innerHTML = data.stableHospitalized;
    critical.innerHTML = data.criticalHospitalized;
    community.innerHTML = data.inCommunityFacilites;
    updated.innerHTML = data.lastUpdatedAtApify.slice(0, 16).replace('T', ' ');
}

refresh();

setInterval(async function() {
    const url = 'https://api.apify.com/v2/key-value-stores/yaPbKe9e5Et61bl7W/records/LATEST?disableRedirect=true';
    const response = await fetch(url)
    const data = await response.json()


    const total = document.querySelector('#total')
    const recovered = document.querySelector('#recovered')
    const active = document.querySelector('#active')
    const deaths = document.querySelector('#deaths')
    const stable = document.querySelector('#stable')
    const critical = document.querySelector('#critical')
    const community = document.querySelector('#community')
    const updated = document.querySelector('#updated')

    total.innerHTML = data.infected;
    recovered.innerHTML = data.discharged;
    active.innerHTML = data.activeCases;
    deaths.innerHTML = data.deceased;
    stable.innerHTML = data.stableHospitalized;
    critical.innerHTML = data.criticalHospitalized;
    community.innerHTML = data.inCommunityFacilites;
    updated.innerHTML = data.lastUpdatedAtApify.slice(0, 16).replace('T', ' ');

}, 3600000);