const mongoose = require('mongoose');

mongoose.connect("mongodb://admin:admin@ds117148.mlab.com:17148/realfaces",{useMongoClient:true});
mongoose.Promise = global.Promise;
