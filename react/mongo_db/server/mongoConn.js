const mongoose = require('mongoose');
// MongoDB 연결 설정
const mongoURI = 'mongodb+srv://builter:DB6279@cluster.l3bxn.mongodb.net/DB1?retryWrites=true&w=majority';
const connectDB = () => {
    return mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
module.exports = connectDB;