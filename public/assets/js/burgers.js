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

    const createBtn = document.getElementById('createBurger');

    if (createBtn) {
        createBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            const newBurger = {
                burger_name: document.getElementById('burgerName')
            };

            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(newCat),
            }).then(() => {
                document.getElementById('burgerName').value = '';

                console.log('Created a new Burger');
                location.reload();
            });
        });
    }
});