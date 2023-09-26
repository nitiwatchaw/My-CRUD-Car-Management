const express = require('express')
var app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

//connnet to mysql
const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        database: "cardb"
    }
)

app.get('/', (req, res) => {
    db.query("SELECT * FROM cars", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })

})

app.get('/read/:id', function (req, res, next) {
    const id = req.params.id
    db.query('SELECT * FROM `cars` WHERE `id` = ? ', [id],
        function (err, results) {
            res.json(results)
        }
    );
})


app.post('/create', (req, res) => {
    const brand = req.body.brand;
    const name = req.body.name;
    const year = req.body.year;
    const cost = req.body.cost;

    db.query("INSERT INTO cars (brand , name , year , cost) VALUES(?,?,?,?)",
        [brand, name, year, cost],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id
    const brand = req.body.brand;
    const name = req.body.name;
    const year = req.body.year;
    const cost = req.body.cost;
    db.query("UPDATE cars SET brand = ? ,name = ? ,year = ?, cost = ? WHERE id  = ? ", [brand, name, year, cost, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM cars WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
})



//configue port 
app.listen(3002, () => {
    console.log("CORS-enabled web server listening on port 3002")
})
