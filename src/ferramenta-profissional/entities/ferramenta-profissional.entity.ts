import { Ferramenta } from "src/ferramenta/entities/ferramenta.entity";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FerramentaProfissional {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fk_ferramenta: number;

    @Column({ length: 50 })
    id_usuario: string;

    @Column()
    nr_nota: number;

    @ManyToMany(() => Ferramenta, (ferramenta) => ferramenta.ferramentaProfissional)
    @JoinColumn({name: 'fk_ferramenta', referencedColumnName:'id'})
    ferramenta?: Ferramenta;
}
