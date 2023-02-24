const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const email = document.getElementById('email').value;

    fetch('insert_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});