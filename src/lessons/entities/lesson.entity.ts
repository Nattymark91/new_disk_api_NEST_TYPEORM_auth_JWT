import { Evaluation } from "src/evaluations/entities/evaluation.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length:100 })
    name: string

    @Column({ type: "varchar", length:20 })
    code: string

    @OneToMany(()=>Evaluation, (evaluation) => evaluation.lesson, {onDelete: 'CASCADE'})
    evaluations: Evaluation[]
}
