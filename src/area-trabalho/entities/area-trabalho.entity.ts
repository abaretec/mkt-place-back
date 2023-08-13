import { AreaProfissional } from "src/area-profissional/entities/area-profissional.entity";
import { AreaVaga } from "src/area-vaga/entities/area-vaga.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AreaTrabalho {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nm_area_trabalho: string;

    @Column('text')
    ds_descricao: string;

    @Column('boolean')
    fl_ativo: Boolean;

    @ManyToMany(() => AreaVaga, (areaVaga) => areaVaga.fk_areatrabalho)
    areaVaga?: AreaVaga[];

    @ManyToMany(() => AreaProfissional, (areaProfissional) => areaProfissional.fk_areatrabalho)
    areaProfissional?: AreaProfissional[];
}
