import express from 'express';

const app = express();

app.listen(3000 , (err) => err ? console.log('listen error') : console.log('Listening to port 3000'))


