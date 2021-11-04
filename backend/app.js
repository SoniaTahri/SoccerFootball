
const express = require('express');
const mongoose = require('mongoose');

const bcrypt= require('bcrypt');

const multer = require('multer');

//import pdfkit

const fs = require('fs');

const PDFDocument = require('./pdfs/pdfs');

const bodyParser = require('body-parser');


const app = express();

//prepare response to JSON to send to FE
app.use(bodyParser.json());
//Parse getted body from FE to JSON object
app.use(bodyParser.urlencoded({ extended: true }))

//connect to database
mongoose.connect('mongodb://localhost:27017/angularRevision', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const User = require('./user');
const Player = require('./player');
const Match = require('./match');
const Stadium = require('./stadium');
const { platform } = require('os');
const match = require('./match');
const player = require('./player');

// Security configuration 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

//traitement logique 
//USER
//CRUD

app.get('/users', (req, res) => {
    console.log('Here into Get ALL Users');
    User.find((err, docs) => {
        if (err) {
            console.log('problem of cnx with DB');
        } else {
            res.status(200).json({
                users: docs,
                message: 'Here all users'
            })
        }
    })
});

app.get('/users/:id', (req, res) => {
    console.log('Here into Get User by ID');
    User.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json(
                    { FindedUser: result }
                )
            }

        }
    )

});

app.post('/users', (req, res) => {
    console.log('req body', req.body);
    console.log('Here into Signup');
    bcrypt.hash(req.body.password, 8).then(
        (cryptedPassword)=>{
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: cryptedPassword,
            });
            user.save().then(
                (result) => {
                    if (result) {
                        res.status(200).json({
                            message: 'user added with success'
                        });
                    }
                }
            )
        }
    )

});

//login
app.post('/login', (req, res) => {
    console.log('Here into Login');
    console.log(req.body);

    User.findOne({ email: req.body.email }).then(
        (FindedUser) => {
            if (!FindedUser) {
                res.status(200).json({
                    message: 'Email incorrect!'
                })
            }
            return bcrypt.compare(req.body.password, FindedUser.password);
        })
        .then(
            (correctPassword) => {
                if (!correctPassword) {
                    res.status(200).json({
                        message: 'Password incorrect!'
                    });
                }
                //email et password correct
                User.findOne({ email: req.body.email}).then(
                    (finalUser) => {
                        const user = new User({
                            id:finalUser._id,
                            firstName: finalUser.firstName,
                            lastName: finalUser.lastName,
                            email: finalUser.email,
                            password: finalUser.password,
                        });
                        res.status(200).json({
                            message:'Email and password correct!',
                            user:user
                        });
                    }
                )
            }
        )
});

app.put('/users/:id', (req, res) => {
    console.log('Here into Edit User');

    let user = new User({
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    })
    User.updateOne({ _id: req.params.id }, user).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'Updated with success'
                })
            }
        }
    )
});

app.delete('/users/:id', (req, res) => {
    console.log('Here into Delete User');

    User.deleteOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json(
                    { message: 'deleted with success' }
                )
            }
        }
    )
});


//traitement logique 
//PLAYER
//CRUD


app.get('/players', (req, res) => {
    console.log('req body', req.body);
    console.log('Here into Get ALL Players');

    Player.find((err, docs) => {
        if (err) {
            console.log('problem of cnx with DB');
        } else {
            res.status(200).json({
                players: docs,
                message: 'Here all Players'
            })
        }
    })
});

app.get('/player/:id', (req, res) => {
    console.log('Here into Get PLayer by ID');

    Player.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json(
                    { FindedPlayer: result }
                )
            }

        }
    )

});

//PDF
app.get('/players/generateFile/pdf',(re,res)=>{
    console.log('get your PDF');

     Player.find((err, docs) => {
         if (err) {
         console.log("ERROR");
         } else{
            // Create The PDF document 
         const doc = new PDFDocument(); 
         // Pipe the PDF into a user's file 
         doc.pipe(fs.createWriteStream('backend/pdfs/player.pdf')); 
         // Add the header - 
         https://pspdfkit.com/blog/2019/generate-invoices pdfkit-node/ 
         doc.image("backend/images/neymar.jpg", 50, 45, { width: 50 }) 
         .fillColor("#444444") 
         .fontSize(20) 
         .text("Here All Users", 110, 57) 
         .fontSize(10) 
         .text("Imm Yasmine Tower", 200, 65, {align: "right" }) 
         .text("Centre Urbain Nord", 200, 80, {align: "right" }).moveDown(); 
         // Create the table - 
         // https://www.andronio.me/2017/09/02/pdfkit-tables/ 
         const table = {
             headers: [ 
                 "Player Name", 
                 "Player Age", 
                 "Player Poste", 
                 "Player number", 
                ],
                 rows: [ ], 
            };
                 // Add the users to the table 
                 for (const players of docs) { table.rows.push([ 
                     player.firstname, 
                     player.poste, 
                     player.number, 
                     player.age, 
                    ]);
                 } 
// Draw the table
doc.moveDown().table(table, 10, 125, { width : 590}); //finalise
//the pdf and end the stream

doc.end();
res.status(200).json({
     message: "HERE PDF (success)", 
    });
}
     });
}); 

app.post('/addPlayer', (req, res) => {
    console.log('req body', req.body);
    console.log('Here into Add Player');

    const player = new Player({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        poste: req.body.poste,
        age: req.body.age,
        number: req.body.number,
    });
    player.save().then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'Player added with success'
                })
            }
        }
    )
});

app.put('/editPlayer/:id', (req, res) => {
    console.log('Here into Edit Player');
    let player = new Player({
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        poste: req.body.poste,
        age: req.body.age,
        number: req.body.number,
    })
    Player.updateOne({ _id: req.params.id }, player).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'Updated with success'
                })
            }
        }
    )
});

app.delete('/deletePlayer/:id', (req, res) => {
    console.log('Here into Delete Player');

    Player.deleteOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json(
                    { message: 'player deleted with success!!' }
                )
            }
        }

    )
});



//traitement logique 
//MATCH
//CRUD

app.get('/matches', (req, res) => {
    console.log('Here into Get ALL Matches');

    Match.find((err, docs) => {
        if (err) {
            console.log('problem of cnx with DB');
        } else {
            res.status(200).json({
                matches: docs,
                message: 'Here all Matches'
            })
        }
    })
});

app.get('/match/:id', (req, res) => {
    console.log('Here into Get Match by ID');

    Match.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json(
                    { FindedMatch: result }
                )
            }

        }
    )

});

app.post('/addMatch', (req, res) => {
    console.log('req body', req.body);
    console.log('Here into Add MAtch');

    const match = new Match({
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
    });

    match.save().then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'Match added with success'
                })
            }
        }
    )
});

app.put('/editMatch/:id', (req, res) => {
    console.log('Here into Edit Match');
    let match = new Match({
        _id: req.body._id,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
    })
    Match.updateOne({ _id: req.params.id }, match).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'Updated with success'
                })
            }
        }
    )
});

app.delete('/deleteMAtch/:id', (req, res) => {
    console.log('Here into Delete MAtch');

    Match.deleteOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'Match deleted with succes!'
                })
            }
        }
    )
});

//traitement logique 
//STADIUM
//CRUD

app.get('/stadiums', (req, res) => {
    console.log('Here into Get ALL Stadiums');

    Stadium.find((err, docs) => {
        if (err) {
            console.log('problem of cnx with DB');
        } else {
            res.status(200).json({
                stadium: docs,
                message: 'Here all Stadiums'
            })
        }
    })
});

app.get('/stadium/:id', (req, res) => {
    console.log('Here into Get Stadium by ID');

    Stadium.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json(
                    { FindedStadium: result }
                )
            }

        }
    )

});

app.post('/addStadium', (req, res) => {
    console.log('req body', req.body);
    console.log('Here into Add Staduim');
    const stadium = new Stadium({
        name: req.body.name,
        capacity: req.body.capacity,
        country: req.body.country,
    })
    stadium.save().then(
        (result) => {
            res.status(200).json({
                message: 'Stadium added with success'
            })
        }
    )

});

app.put('/editStadium/:id', (req, res) => {
    console.log('Here into Edit Sradium');
    let stadium = new Stadium({
        _id: req.body._id,
        name: req.body.name,
        capacity: req.body.capacity,
        country: req.body.country,
    })
    Stadium.updateOne({ _id: req.params.id }, stadium).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'Updated with success'
                })
            }
        }
    )
});

app.delete('/deleteStadium/:id', (req, res) => {
    console.log('Here into Delete Stadium');

    Stadium.deleteOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json(
                    { message: 'stadium deleted with success!!' }
                )

            }
        }
    )
});


module.exports = app;

