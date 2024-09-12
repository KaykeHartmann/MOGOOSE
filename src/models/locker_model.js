import db from "../db.js";

import Student from "./student_models.js";

const Schema = db.Schema;

const LockerSchema = new Schema({
    heigth:{
        type: Number,
        required: true,
        min: 0,

    },
    width:{
        type: Number,
        required: true,
        min: 0,
    },
    length:{
        type: Number,
        required: true,
        min: 0,
    },
    student:{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }
});

const Locker = db.model('Locker', LockerSchema);

const student = new Student({
    name: "kayke",  
    birthDate: "2000/01/01",
    zipCode: "12345678",
    email: "kayke@gmail.com",  
}); 

student.save()

console.log(student)

export default Locker;