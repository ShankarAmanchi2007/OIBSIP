var typed = new Typed(".typing", {

    strings: [

        "Aspiring Full Stack Developer",

        "Frontend Web Developer",

        "Computer Science Student"

    ],

    typeSpeed: 60,

    backSpeed: 40,

    loop: true

});


const contactForm = document.getElementById('contactForm');


contactForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const message = document.getElementById('message').value;


    try{

        const response = await fetch('http://localhost:5000/contact', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                name,

                email,

                message

            })

        });

        const data = await response.json();

        alert(data.message);

        contactForm.reset();

    }

    catch(error){

        alert('Something went wrong');

    }

});