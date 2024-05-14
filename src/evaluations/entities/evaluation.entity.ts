import { Lesson } from "src/lessons/entities/lesson.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Evaluation {
    @PrimaryGeneratedColumn()
    id: number

    @Column({  type: "integer"})
    score: number

    @CreateDateColumn({select: false})
    createdAt: Date
    
    @ManyToOne(() => User, (user) => user.evaluation )
    @JoinColumn({name: 'user_id'})
    user: User

    @ManyToOne(() => Lesson, (lesson) => lesson.evaluations )
    @JoinColumn({name: 'lesson_id'})
    lesson: Lesson
}
