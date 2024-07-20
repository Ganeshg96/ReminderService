const express= require('express');
const bodyParser = require('body-parser');

const {PORT}= require('./config/serverConfig');

//const {sendBasicEmail}= require('./services/email-service');
var cron = require('node-cron');

const setupAndStartServer=() =>{
    const app= express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,() =>{
        console.log(`server started at port ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com',
        //     'ganeshgone03@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you, I hope you like the support'
        // );
        cron.schedule('*/1 * * * *', () => {
            console.log('running a task every one minutes');
          });
    });
}

setupAndStartServer();