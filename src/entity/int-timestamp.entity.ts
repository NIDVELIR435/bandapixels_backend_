import { Timestamp } from "./timestamp.entity";
import { PrimaryGeneratedColumn } from "typeorm";

export class IntTimestamp extends Timestamp {
  @PrimaryGeneratedColumn()
  id: number
}
