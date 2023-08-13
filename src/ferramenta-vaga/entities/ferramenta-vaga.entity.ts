import { Ferramenta } from "src/ferramenta/entities/ferramenta.entity";
import { Vaga } from "src/vaga/entities/vaga.entity";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FerramentaVaga {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fk_ferramenta: number;

    @Column()
    fk_vaga: number;

    @Column()
    nr_nota: number;

    @ManyToMany(() => Ferramenta, (ferramenta) => ferramenta.ferramentaVaga)
    @JoinColumn({name: 'fk_ferramenta', referencedColumnName:'id'})
    ferramenta?: Ferramenta;

    @ManyToMany(() => Vaga, (vaga) => vaga.ferramentaVaga)
    @JoinColumn({name: 'fk_ferramenta', referencedColumnName:'id'})
    vaga?: Vaga;
}
