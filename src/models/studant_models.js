import db from "../db" // const db = require('../db.js')

const Schema = db.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 8,
    },
    email:{
        type: String,
        required: true,
        validate:{
            validator: function(v){
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            
        }
    }
});

Student.save()

const Student = db.model('Student', studentSchema);

export default Student;