const mongoose = require('mongoose');

mongoose.connect("mongodb://")

mongoose.Schema({
    username:string,
    name: string,
    id: string,
    class: string

})