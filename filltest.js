/**
 * Created by Long on 8/21/2014.
 */
var mongoose = require('mongoose')
    , configDB = require('./config/database.js')
    ;

var Notification = require('./app/models/notification.js');
mongoose.connect(configDB.url); // connect to our database

var data =   {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "aa a King",
        "read": "False"
    };


    var rec = new Notification(data);

    rec.save(function(error, data){
        if(error){
            console.log('Error inserting data '+error)
        }
        else{
            console.log('Inserted ')
        }
    });


finallyDone = function() {
    console.log('\n\nAll data filled...')
    process.exit(0)
}