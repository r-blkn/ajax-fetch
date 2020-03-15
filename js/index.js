const timeElement = document.querySelector('.page-loader');
timeElement.innerText = new Date().toLocaleTimeString();


const buttonGetHtmlRequestAjax = document.querySelector('.get-html-ajax');
buttonGetHtmlRequestAjax.addEventListener('click', getHtmlAjax);

function getHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container')
                .innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}

const buttonGetHtmlRequestFetch = document.querySelector('.get-html-fetch');
buttonGetHtmlRequestFetch.addEventListener('click', getHtmlFetch);

function getHtmlFetch() {
    fetch('client-data.html')
        .then(response => response.text() )
        .then(html => document.querySelector('.html-container')
            .innerHTML = html);
}

const buttonGetJsonHtmlRequestAjax = document.querySelector('.get-json-ajax');
buttonGetJsonHtmlRequestAjax.addEventListener('click', getJsonAjax);

function getJsonAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.querySelector('.client-name').innerText = data.name;
            document.querySelector('.account-balance').innerText = data.balance;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}

const buttonGetJsonRequestFetch = document.querySelector('.get-json-fetch');
buttonGetJsonRequestFetch.addEventListener('click', getJsonFetch);

function getJsonFetch() {
    fetch('client-data.json')
        .then(response => response.json() )
        .then(data => {
            document.querySelector('.client-name').innerText = data.name;
            document.querySelector('.account-balance').innerText = data.balance;
        });
}