import mongoose from "mongoose"  //Importar mongoose

//Creción del esquema. Se indica cada campo de la BD con su tipo
const userSchema = new mongoose.Schema({ 
    user: {
        type: String,
        unique: true
    },
    mensaje: String
}, {
    timestamps: true,  //createAt, updateAt. ==> utilizado para que automaticamente cree los campos createAt y updateAt
    versionKey: false // __v: 0. ==> necesita establecerse
})


//Exportamos el modelo, indicando el nombre de la colección y el esquema
export default mongoose.model("users", userSchema)