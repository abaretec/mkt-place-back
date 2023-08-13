import { AreaTrabalho } from "src/area-trabalho/entities/area-trabalho.entity";
import { Vaga } from "src/vaga/entities/vaga.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AreaVaga {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fk_areatrabalho: number;

    @Column()
    fk_vaga: number;

    @Column()
    nr_nota: number;

    @ManyToMany(() => AreaTrabalho, (areaTrabalho) => areaTrabalho.areaVaga)
    @JoinColumn({name: 'fk_areatrabalho', referencedColumnName:'id'})
    areatrabalho?: AreaTrabalho;

    @ManyToMany(() => Vaga, (vaga) => vaga.areaVaga)
    @JoinColumn({name: 'fk_vaga', referencedColumnName:'id'})
    vaga?: Vaga;
}
