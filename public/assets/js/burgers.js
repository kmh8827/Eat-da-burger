const { response } = require("express");

document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.log('DOM loaded');
    }

    const eatBtn = document.querySelectorAll('.changeBurger');

    if (eatBtn) {
        eatBtn.forEach((button) => {
            button.addEventListener('click', (e) => {

            console.log('devoured');

            const id = e.target.getAttribute('data-id');
            const eaten = e.target.getAttribute('data-devoured');

            const newDevoured = {
                devoured: eaten
            };

            fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(newDevoured),
            }).then((response) => {

                if (response.ok) {
                    console.log(`changed devored to ${eaten}`);
                    location.reload('/');
                } else {
                    alert('Uh-Oh');
                }

            });
            });
        });
    }

    const createBurget = document.getElementById('createBurget');
});