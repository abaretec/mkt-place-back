import { Vaga } from "src/vaga/entities/vaga.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Agencia {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 50 })
    id_usuario:string;
    
    @Column({ length: 100 })
    nm_agencia:string;

    @Column('text')
    ds_detalhe:string;
    
    @Column({ length: 200 })
    ds_endereco:string;
    
    @Column({ length: 100 })
    nm_contato:string;
    
    @Column()
    nr_telcontato:string;
    
    @Column({ length: 100 })
    ds_email:string;
    
    @Column({ length: 100 })
    ds_tamanho:string;

    @Column({ length: 100 })
    ds_cidade:string;

}
