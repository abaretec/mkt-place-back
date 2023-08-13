import { FerramentaProfissional } from "src/ferramenta-profissional/entities/ferramenta-profissional.entity";
import { FerramentaVaga } from "src/ferramenta-vaga/entities/ferramenta-vaga.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ferramenta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nm_ferramenta: string;

    @Column('text')
    ds_descricao: string;

    @Column('boolean')
    fl_ativo: Boolean;

    @OneToMany(() => FerramentaProfissional, (ferramentaProfissional) => ferramentaProfissional.fk_ferramenta)
    ferramentaProfissional?: FerramentaProfissional[];

    @ManyToMany(() => FerramentaVaga, (ferramentaVaga) => ferramentaVaga.fk_ferramenta)
    ferramentaVaga?: FerramentaVaga[];
}
