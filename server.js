const express = require('express')

const app = express();
app.use(express.json())
const port = process.env.port || 8080;

app.use(express.static(__dirname + '/public'));

app.use('/submitScore', (req, res) => {
    // Set up DB
    // const db = getDb();
    const prepStmt = 'INSERT INTO score (scoreid, fk_gameid, score, initial) VALUES (?, ?, ?, ?)'
    // Data data from body
    console.log(req.body)
    const scoreid = req.body.scoreid
    const gameid = req.body.gameid
    const score = req.body.score
    const initial = req.body.initial
    // Run Query (UNCOMMENT WHEN USING)
    // db.query(prepStmt, [scoreid, gameid, score, initial], (error, result, fields) => {
    //     if (error) { res.status(500).end(); }
    //     else {
    //         res.status(200).end()
    //     }
    // })
    res.status(200).end();
})

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});