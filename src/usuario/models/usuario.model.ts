import { Document } from "mongoose";

export interface Usuario extends Document{
    nome: string;
    email: string;
    telefone: number;
    senha: string; 
    tipo:string;
}