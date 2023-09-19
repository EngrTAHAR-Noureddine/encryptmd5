const mongoose = require('mongoose');

const Schema=mongoose.Schema;

//Create Schema
const Md5Schema = new Schema({
    PASSWORD:{
        type:String,
        required:true
    },
    MD5:{
        type:String,
        required:true
    }
});
// 'TIMESTAMP',  'CPU_PERCENTAGE', 'RAM_PERCENTAGE', 'DISK_PERCENTAGE', 'IS_ANOMALY'
module.exports = Md5Module = mongoose.model('md5',Md5Schema);