import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length:20, unique: true })
    login: string

    @Column({ type: "varchar" })
    password: string
}

