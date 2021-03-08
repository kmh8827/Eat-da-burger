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
                devoured: true
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
                burger_name: document.getElementById('burgerName').value
            };
            console.log("newburger is " + newBurger);
            console.log(document.getElementById('burgerName').value)
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('burgerName').value = '';

                console.log('Created a new Burger');
                // location.reload();
            });
        });
    }
});