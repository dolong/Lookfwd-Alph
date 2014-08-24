/**
 * Created by Long on 8/21/2014.
 */
var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.ObjectId

var notificationSchema = new mongoose.Schema({
    id: {type: ObjectId},
    date: {type: Date}, //Date to be Notified
    title: {type: String}, //Book Title
    author: {type: String}, //Book Author
    bookID: {type: ObjectId}, //Book ID
    image: {type: String}, //Book Image
    user: {type: String}, //User email
    platforms: {type: [String]}, //Notification Platforms (e.g. mobile push, email..)
    read: {type: Boolean} //Notification has been read or not
})

module.exports = mongoose.model('Notifications', notificationSchema)

