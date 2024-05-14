import { Evaluation } from "src/evaluations/entities/evaluation.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length:100 })
    name: string

    @Column({ type: "varchar", length:30, unique: true})
    email: string

    @OneToMany(()=>Evaluation, (evaluation) => evaluation.user, {onDelete: 'CASCADE'})
    evaluation: Evaluation[]
}