import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    id_usuario: string;

    @Column('text')
    ds_descricao: string;

    @Column()
    dh_nascimento: Date;

    @Column()
    dh_inclusao: Date;

    @Column('boolean')
    fl_ativo: Boolean;

    @Column()
    nr_tipo_cliente:number;

}
