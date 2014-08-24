var Book = require('../app/models/book');
var aws = require("../node_scripts/lib/aws");
var Notification = require('../app/models/notification');
prodAdv = aws.createProdAdvClient("AKIAJDVV35I45ACW26CQ", "gWjMmaUq5i6h2SZ/70DErKsmwzwK1waWhPashA6t", "lookfwd-20");

module.exports = function (app, passport) {

// normal routes ===============================================================


    // show the home page (will also have our login links)
    app.get('/', function (req, res) {
        Book.find({}).sort({date: 'desc'}).limit(10).exec(function (err, book) {
            nbooks = book
            res.render('./app/index.ejs', {
                user: req.user,
                nbooks: nbooks
            });
        });
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile.ejs', {
            user: req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    // NOTIFICATIONS ==============================
    app.get('/notifications', function (req, res) {
        Notification.find({ user: "Guest"}).exec(function (err, resu) {
            var result = [];
            var j = 0
            for (var i in resu) {
                image = resu[i]['image']
                console.log(resu[i]['image'])
                if (!image)
                    image = "http://dolong.ca/placeholder.jpg"

                result.push({
                    'title': resu[i]['title'],
                    'bookID': resu[i]['bookID'],
                    'author': resu[i]['author'],
                    'image': image,
                    'read': resu[i]['read'],
                    'platforms': resu[i]['platforms'],
                    'date': resu[i]['date']
                })
                j++
            }
            res.render('./app/notifications.ejs', {
                user: req.user,
                res: result
            });
        })
    });

    //Process A Delete Notification
    app.post('/deletenotification', function (req, res) {
        Notification.findOne({ user: req.param('user'), title: req.param('title')}).remove().exec();
        Notification.find({ user: "Guest"}).exec(function (err, resu) {
            var result = [];
            var j = 0
            for (var i in resu) {
                result.push({
                    'title': resu[i]['title'],
                    'author': resu[i]['author'],
                    'read': resu[i]['read'],
                    'platforms': resu[i]['platforms'],
                    'date': resu[i]['date']
                })
                j++
            }
            res.redirect('/notifications')
        })

    })

    app.get('/autocomplete', function (req, res) {
        var q = req.query['term']

        Book.find({ title: new RegExp(q, "i")}, function (err, resu) {
            var resut = [];
            var j = 0
            for (var i in resu) {
                resut.push({ 'value': resu[i]['title'] })
                j++
                //limit to 5 in view
                if (resut.length > 5)
                break;
            }

            res.send(resut)
        })
    })


// =============================================================================
// ADMIN                      ==================================================
// =============================================================================


    // show the home page (will also have our login links)
    app.get('/additem', function (req, res) {
            res.render('./app/additem.ejs', {
                user: req.user
            });
    });

    //Check Amazon to see if book is there
    app.get('/checkamazon', function (req, res) {
        var q = req.query['q']
        Book.find({ title: new RegExp(q, "i")}).exec(function (err, resu) {
                var result = [];
                var j = 0
                for (var i in resu) {
                    var descr = resu[i]['descr'];
                    var image = resu[i]['image'];
                    var newDate = resu[i]['date'].toDateString()
                    // if no descr, grab from server
                    if (!descr) {
                        descr = "Description for this book is not available yet";
                        image = "http://dolong.ca/placeholder.jpg";

                        var myVar;

                        function myFunction() {
                            myVar = setTimeout(function () {
                                // after 1 second push th is if no response
                                result.push({ 'title': resu[i]['title'], 'desc': descr, 'date': resu[i]['date'], 'author': resu[i]['author'], 'amazon': resu[i]['amazon'], 'image': image  })
                                //alert('ok');
                                console.log('No Book Found');

                                backURL=req.header('Referer') || '/';
                                res.redirect(backURL+"&notfound");
                            }, 1000)

                            //This function executes but times out in 1 second
                            prodAdv.call("ItemSearch", {SearchIndex: "Books", Title: resu[i]['title'], Author: resu[i]['author'], ResponseGroup: "Medium", ItemPage: "1"}, function (err, re) {
                                var item = re.ItemSearchResponse.Items[0].Item[0]
                                descr = (item.EditorialReviews[0].EditorialReview[0].Content[0])
                                image = (item.MediumImage[0].URL[0])
                                title = item.ItemAttributes[0].Title[0]
                                author = item.ItemAttributes[0].Author[0]
                                date = item.ItemAttributes[0].ReleaseDate[0]
                                amazon = (item.DetailPageURL[0]);
                                // after descr and image have the new values, push it to result
                                result.push({ 'title': title, 'desc': descr, 'date': date, 'author': author, 'amazon': amazon, 'image': image  })

                                // if everything is in result, res.send
                                if (result.length === resu.length) {
                                    res.render('./admin/checkamazon.ejs', {
                                        user: req.user,
                                        res: result
                                    });
                                }

                                //stops the timeout since we have the output
                                myStopFunction();
                            })
                        }

                        function myStopFunction() {
                            clearTimeout(myVar);
                        }

                        //time to query amazon
                        myFunction();

                        // if there is a descr, push it to result
                    } else {
                        result.push({ 'title': resu[i]['title'], 'desc': descr, 'date': resu[i]['date'], 'author': resu[i]['author'], 'amazon': resu[i]['amazon'], 'image': image  })

                        // if everything is in result, res.send
                        if (result.length === resu.length) {
                            res.render('./app/search.ejs', {
                                user: req.user,
                                res: result
                            });
                        }
                    }
                }
            }
        );
    });

    //All Book List
    app.get('/admin', function (req, res) {
        var q = ""
        var p = req.query['p']
        q = req.query['q']
        if (!q)
        q = "";
        if (!p)
            res.redirect('/admin?p=1&q='+q);
        //var p = new RegExp(q, "i")
        var show = 0
        var page = 1
        var page = parseInt(p)
        show = (page - 1) * 10
        Book.find({ title: new RegExp(q, "i")}).skip(show).limit(10).exec(function (err, resu) {
            var result = [];
            var j = 0

            /** THIS IS THE CODE FOR NO AWS QUERIES
             **/
            for (var i in resu) {
                result.push({
                    'id': resu[i]['_id'],
                    'title': resu[i]['title'],
                    'desc': resu[i]['desc'],
                    'date': resu[i]['date'],
                    'author': resu[i]['author'],
                    'amazon': resu[i]['amazon'],
                    'image': resu[i]['image']
                })
                j++
            }
            var count = Book.count({}, function(err, c) {
                res.render('./admin/booklist.ejs', {
                    user: req.user,
                    res: result,
                    pg: page,
                    c: c
                });

            });
        });
    });


    //Process a edit
    app.post('/editbook', function (req, res) {
        newbook = req.body
        Book.update({_id: req.param('id')},  newbook , {}, function (err) {
            if (err) throw err;
            console.log('updated '+ newbook);
        });
        backURL=req.header('Referer') || '/';
        res.redirect(backURL);
    })


    //Process A Delete
    app.post('/deletebook', function (req, res) {
        Book.findOne({ _id: req.param('id')}).remove().exec();
        backURL=req.header('Referer') || '/';
        res.redirect(backURL);
    })

    //Process a additional book
    app.post('/addbook', function (req, res) {
        newbook = req.body

        var rec = new Book(newbook);

        rec.save(function(error, data){
            if(error){
                console.log('Error inserting data '+error)
            }
            else{
                console.log(data)
                console.log('Inserted ')
                res.redirect("/single?q=" + req.param("title") + "&t=title");

            }
        });
        res.redirect("/single?q=" + req.param("title") + "&t=title");

    })
// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================
    //Process A New Set Notification
    app.post('/search', function (req, res, next) {
        var data = {
            "bookID": req.param('bookID'),
            "date": req.param('date'),
            "title": req.param('title'),
            "author": req.param('author'),
            "image": req.param('image'),
            "user": req.param('user'),
            "read": "false"
        };

        var rec = new Notification(data);

        rec.save(function (error, data) {
            if (error) {
                console.log('Error inserting data' + error)
            }
            else {
                console.log('Inserted ' + req.param('title'))
            }
        });
        res.send(req.body);

    })//Single View Search Query
    app.get('/single', function (req, res) {
        var q = req.query['q']
            , f = req.query['t']
        Book.find({ title: new RegExp(q, "i")}).exec(function (err, resu) {
            var result = [];
            var j = 0

            /** THIS IS THE CODE FOR NO AWS QUERIES
             **/
            for (var i in resu) {
                var descr = resu[i]['desc'];
                var image = resu[i]['image'];
                if (!descr) {
                    descr = "Description for this book is not available yet";
                }
                if (!image) {
                    image = "http://dolong.ca/placeholder.jpg";
                }
                //image = "http://dolong.ca/placeholder.jpg";
                result.push({
                    'title': resu[i]['title'],
                    '_id': resu[i]['_id'],
                    'desc': descr,
                    'date': resu[i]['date'],
                    'author': resu[i]['author'],
                    'amazon': resu[i]['amazon'],
                    'image': resu[i]['image']
                })
                j++
            }
            res.render('./app/single.ejs', {
                user: req.user,
                res: result
            });
        })
    });

    //Search Query
    app.get('/search', function (req, res) {
        var q = req.query['q']
            , f = req.query['t']
        Book.find({ title: new RegExp(q, "i")}).exec(function (err, resu) {
            var result = [];
            var j = 0

            /** THIS IS THE CODE FOR NO AWS QUERIES
             **/
            for (var i in resu) {
                var descr = resu[i]['desc'];
                var image = resu[i]['image'];
                if (!descr) {
                    descr = "Description for this book is not available yet";
                }
                if (!image) {
                    image = "http://dolong.ca/placeholder.jpg";
                }
                //image = "http://dolong.ca/placeholder.jpg";
                result.push({
                    'title': resu[i]['title'],
                    '_id': resu[i]['_id'],
                    'desc': descr,
                    'date': resu[i]['date'],
                    'author': resu[i]['author'],
                    'amazon': resu[i]['amazon'],
                    'image': resu[i]['image']
                })
                j++
            }
            res.render('./app/search.ejs', {
                user: req.user,
                res: result
            });
        })
    });
// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
    // LOGIN ===============================
    // show the login form
    app.get('/login', function (req, res) {
        res.render('./app/login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // SIGNUP =================================
    // show the signup form
    app.get('/signup', function (req, res) {
        res.render('./app/signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // facebook -------------------------------

    // send to facebook to do the authentication
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    // twitter --------------------------------

    // send to twitter to do the authentication
    app.get('/auth/twitter', passport.authenticate('twitter', { scope: 'email' }));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));


    // google ---------------------------------

    // send to google to do the authentication
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // locally --------------------------------
    app.get('/connect/local', function (req, res) {
        res.render('connect-local.ejs', { message: req.flash('loginMessage') });
    });
    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/connect/local', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // facebook -------------------------------

    // send to facebook to do the authentication
    app.get('/connect/facebook', passport.authorize('facebook', { scope: 'email' }));

    // handle the callback after facebook has authorized the user
    app.get('/connect/facebook/callback',
        passport.authorize('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    // twitter --------------------------------

    // send to twitter to do the authentication
    app.get('/connect/twitter', passport.authorize('twitter', { scope: 'email' }));

    // handle the callback after twitter has authorized the user
    app.get('/connect/twitter/callback',
        passport.authorize('twitter', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));


    // google ---------------------------------

    // send to google to do the authentication
    app.get('/connect/google', passport.authorize('google', { scope: ['profile', 'email'] }));

    // the callback after google has authorized the user
    app.get('/connect/google/callback',
        passport.authorize('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function (req, res) {
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function (req, res) {
        var user = req.user;
        user.facebook.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', isLoggedIn, function (req, res) {
        var user = req.user;
        user.twitter.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', isLoggedIn, function (req, res) {
        var user = req.user;
        user.google.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });


};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}


// route middleware to ensure user is logged in
function hasUser(req, res, next) {
    if (req.isAuthenticated())
        return next();
}
