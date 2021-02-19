import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { Length, IsNotEmpty, validate } from 'class-validator';
import { hashSync, compareSync} from 'bcryptjs';
import { Role } from 'infra/web/auth/roles';

@Entity()
@Unique(['username'])
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty()
  @Length(4, 20)
  username!: string;

  @Column()
  @IsNotEmpty()
  @Length(8, 100)
  password!: string;

  @Column({ type: 'enum', enum: Role, default: Role.DEFAULT })
  @IsNotEmpty()
  role!: Role;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  hashPassword() {
    this.password = hashSync(this.password, 8);
  }

  checkPassword(unencryptedPassword: string) {
    return compareSync(unencryptedPassword, this.password);
  }

  validate() {
    return validate(this);
  }
}
