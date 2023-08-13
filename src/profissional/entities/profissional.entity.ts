import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profissional {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_usuario: string;

    @Column('text')
    ds_descricao: string;

    @Column('text')
    ds_historico: string;

    @Column()
    vl_valor_hora:number; 

    @Column()
    vl_salario:number;
}
