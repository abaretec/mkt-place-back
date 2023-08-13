import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';



export const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    email: {
        type: String,
    },
    telefone: {
        type: Number,
    },
    senha: {
        type: String,
    }, 
    tipo: {
        type: String,
    }, 
});

UsuarioSchema.pre('save', async function(next: (err?: Error) => void){
    try{
        if(!this.isModified('senha')){
            return next()
        }

        this['senha'] = await bcrypt.hash(this['senha'], 10)
    }catch(err){
        return next(err);
    }
} )
