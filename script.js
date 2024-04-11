const username = document.querySelector('#name');
const phone = document.querySelector('#phone');



const recordContact= (event) => {
    event.preventDefault();
    const data = {
        data: [
            {
                'telefone': phone.value,
                'nome': username.value
            }
        ]
    };

    fetch('https://sheetdb.io/api/v1/av3h3b8j7ef6d', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        alert('Registrado com sucesso')
        console.log(data)
    });

    username.value = ''
    phone.value = ''
}

document.querySelector('#main-form').addEventListener('submit', recordContact)
