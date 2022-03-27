import mongoose from "mongoose";

mongoose.connect(
    'mongodb://localhost:27017/portfolio_db',
    {useNewUrlParser: true}
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

const investmentSchema = mongoose.Schema({
    date: {type: Date, required: true},
    ticker: {type: String, required: true},
    buyPrice: {type: Number, required: true},
    amount: {type: Number, required: true},
});

const Investment = mongoose.model("Portfolio", investmentSchema)


//create investment
const createInvestment = async (date, ticker, buyPrice, amount) => {
    const investment = new Investment({date: date, ticker: ticker, buyPrice: buyPrice, amount: amount});
    return investment.save()
}

//Retrieve investments
const findInvestment = async (filter, projection, limit) => {
    const query = Investment.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec(); 
}

const findInvestmentById = async (_id) => {
    const query = Investment.findById(_id);
    return query.exec()
}

//Edit
const replaceInvestment = async (_id, date, ticker, buyPrice, amount) => {
    const result = await Investment.replaceOne({_id: _id}, {date: date, ticker: ticker, buyPrice: buyPrice, amount: amount})
    return result.modifiedCount;
}  

const deleteById = async (_id) => {
    const result = await Investment.deleteOne({_id: _id});
    return result.deletedCount;
}

export {createInvestment, findInvestment, findInvestmentById, replaceInvestment, deleteById}