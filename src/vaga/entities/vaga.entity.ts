import { Agencia } from "src/agencia/entities/agencia.entity";
import { AreaVaga } from "src/area-vaga/entities/area-vaga.entity";
import { FerramentaVaga } from "src/ferramenta-vaga/entities/ferramenta-vaga.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vaga {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    ds_titulo:string;

    @Column('text')
    ds_vaga:string;

    @Column({ length: 50 })
    id_usuario:string;

    @Column()
    dh_inclusao:Date;

    @Column()
    dh_vigencia_inicial:Date;

    @Column()
    dh_vigencia_final:Date;

    @ManyToMany(() => AreaVaga, (areaVaga) => areaVaga.fk_vaga)
    areaVaga?: AreaVaga[];

    @ManyToMany(() => FerramentaVaga, (ferramentaVaga) => ferramentaVaga.fk_vaga)
    ferramentaVaga?: FerramentaVaga[];

}
