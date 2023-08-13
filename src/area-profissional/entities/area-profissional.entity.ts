import { AreaTrabalho } from "src/area-trabalho/entities/area-trabalho.entity";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AreaProfissional {    
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fk_areatrabalho: number;

    @Column({ length: 50 })
    id_usuario: string;

    @Column()
    nr_nota: number;

    @ManyToMany(() => AreaTrabalho, (areaTrabalho) => areaTrabalho.areaProfissional)
    @JoinColumn({name: 'fk_areatrabalho', referencedColumnName:'id'})
    areatrabalho?: AreaTrabalho;

}
