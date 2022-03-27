import * as investments from './portfolio_model.js'
import express from 'express'

const PORT = 3000

const app = express();

app.use(express.json());



//Create new investment
app.post('/portfolio', (req, res) => {
    investments.createInvestment(req.body.date, req.body.ticker, req.body.buyPrice, req.body.amount)
        .then(investment => {
            res.status(201).json(investment);
        })
        .catch(error =>{
            console.error(error);
            res.status(500).json({Error:'Request failed'});
        });
});


//Retrieve an investment corresponding to the ID
app.get('/portfolio/:_id', (req, res) => {
    const investmentId = req.params._id;
    investments.findInvestmentById(investmentId)
        .then(investment => {
            if (investment !== null){
                res.json(investment);
            } else {
                res.status(500).json({Error: 'Resource not found'})
            }
        })
        .catch(error => {
            res.status(500).json({Error: 'Request failed'});
        })
});


//retrieve investments
app.get('/portfolio', (req, res) => {
    let filter = {};

    if(req.query.ticker !== undefined){
        filter = {ticker: req.query.ticker};
    }
    investments.findInvestment(filter,'', 0)
        .then(investments => {
            res.status(200);
            res.send(investments);
        })
        .catch(error => {
            console.error(error);
            res.status(500);
            res.send({Error: 'Request failed'});
        });
})

//Updating investment with ID provided
app.put('/portfolio/:_id', (req, res) => {
    investments.replaceInvestment(req.params._id, req.body.date, req.body.ticker, req.body.buyPrice, req.body.amount)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({_id: req.params._id, date: req.body.date, ticker: req.body.ticker, buyPrice: req.body.buyPrice, amount: req.body.amount })
            }else {
                res.status(500).json({Error: 'Resource not found'})
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({Error: 'Request failed'});
        });
});


app.delete('/portfolio/:id', (req, res) => {
    investments.deleteById(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(500).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
