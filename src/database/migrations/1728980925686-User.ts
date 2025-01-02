import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1728980925686 implements MigrationInterface {
  name = 'User1728980925686';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TYPE "public"."user_role_enum" AS ENUM ('user', 'admin');
    `);
    await queryRunner.query(`
      CREATE TABLE "user" (
      "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
      "name" character varying NOT NULL, 
      "email" character varying NOT NULL, 
      "password" character varying NOT NULL, 
      "phoneNumber" character varying, 
      "avatar" character varying, 
      "isAuthenticated" boolean NOT NULL DEFAULT false, 
      "role" "public"."user_role_enum" NOT NULL DEFAULT 'user', 
      "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
      "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
      "deletedAt" TIMESTAMP WITH TIME ZONE, 
      CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), 
      CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`
      DROP TYPE "public"."user_role_enum";
    `);
  }
}
