import mongoose from 'mongoose';

const mongoDB = "mongodb+srv://kaykeharmann:kayke290616@cluster0.lm7gq.mongodb.net/"
const database = "documentos";

const main = async () => {
    mongoose.connect(mongoDB + database)
}

main()
    .then(() => console.log(`conectado ao mongoDB ${database} com sucesso`))
    .catch(err => console.log(err))

export default mongoose; // module exports = mongoose

