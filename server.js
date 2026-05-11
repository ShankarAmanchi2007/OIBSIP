const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const dotenv = require('dotenv');

const Contact = require('./models/Contact');


dotenv.config();


const app = express();


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// MongoDB Connection

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log('MongoDB Connected');

})

.catch((error) => {

    console.log(error);

});


// Home Route

app.get('/', (req, res) => {

    res.send('Backend + MongoDB Running Successfully');

});


// Contact Route

app.post('/contact', async (req, res) => {

    try{

        const { name, email, message } = req.body;

        const newContact = new Contact({

            name,

            email,

            message

        });

        await newContact.save();

        res.status(201).json({

            success: true,

            message: 'Message Saved Successfully'

        });

    }

    catch(error){

        res.status(500).json({

            success: false,

            message: 'Server Error'

        });

    }

});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});