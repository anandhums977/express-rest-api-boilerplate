import { Entity, Column, PrimaryGeneratedColumn,Repository } from "typeorm"


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column({ default: false })
    isActive: boolean;

    @Column({ type: "date", nullable: true })
    birthDate: Date;

 
    @Column({ default: () => "CURRENT_TIMESTAMP" }) 
    createdAt: Date;

    @Column({ default: () => "CURRENT_TIMESTAMP" }) 
    updatedAt: Date;
}
