document.addEventListener('DOMContentLoaded', (event) => {
    // Makes sure the DOM haS loaded
    if (event) {
        console.log('DOM loaded');
    }

    const eatBtn = document.querySelectorAll('.changeBurger');
    // Checks to see if an Eat Button exists
    if (eatBtn) {
        eatBtn.forEach((button) => {
            button.addEventListener('click', (e) => {

            console.log('devoured');

            const id = e.target.getAttribute('data-id');
            // Changes the devoured value of Selected Burger to True
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
    // Checks for the create Button
    if (createBtn) {
        createBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            // Gets the burger ID
            const newBurger = {
                burger_name: document.getElementById('burgerName').value
            };

            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('burgerName').value = '';

                location.reload();
            });
        });
    }
});