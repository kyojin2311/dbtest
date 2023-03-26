const mongoose = require('mongoose');
const Person = require('./Person');
const Cars = require('./Car');
const carOwnerSchema = new mongoose.Schema({
    data :{ 
        type: Person.schema
    },
    email :{type: String, required: true, unique: true},
    OwnedCar : [{type: mongoose.Schema.Types.ObjectId, ref: "Cars"}]
})

module.exports = mongoose.model('CarOwners',carOwnerSchema);
