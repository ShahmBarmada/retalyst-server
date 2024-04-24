import {
  Entity,
  PrimaryKey,
  Property,
  Index,
  Unique,
  ManyToOne,
} from '@mikro-orm/core';

@Entity()
export class Roles {
  @PrimaryKey()
  role_id!: number;

  @Property({ type: 'varchar', length: 20 })
  @Unique({ name: 'roles_ix1' })
  role_desc!: string;

  @Property({ type: 'jsonb', nullable: true })
  role_perms?: { foo: number; bar: number };
}

@Entity()
export class Users {
  @PrimaryKey()
  user_id!: number;

  @Property({ type: 'varchar', length: 30 })
  @Index({ name: 'users_ix_name' })
  user_name!: string;

  @Property({ type: 'varchar', length: 11 })
  @Index({ name: 'users_ix_phone' })
  @Unique({ name: 'users_uq_phone' })
  user_phone!: string;

  @Property({ type: 'varchar', length: 30, nullable: true })
  @Unique({ name: 'users_uq_email' })
  user_email?: string;

  @Property({ type: 'varchar' })
  user_hash!: string;

  @Property({ type: 'timestamp', length: 0 })
  user_created!: string;

  @Property({ type: 'timestamp', length: 0, nullable: true })
  user_activated?: string;

  @Property({ type: 'timestamp', length: 0, nullable: true })
  user_deleted?: string;

  @ManyToOne(() => Roles, { fieldName: 'user_role' })
  user_role: Roles;
}

@Entity()
export class Areas {
  @PrimaryKey()
  area_id!: number;

  @Property({ type: 'smallint', default: 0 })
  area_level!: number;

  @Property({ type: 'smallint' })
  area_parent!: number;

  @Property({ type: 'varchar', length: 30, nullable: true })
  area_gov?: string;

  @Property({ type: 'varchar', length: 30, nullable: true })
  area_div?: string;

  @Property({ type: 'varchar', length: 30, nullable: true })
  area_city?: string;

  @Property({ type: 'varchar', length: 30, nullable: true })
  area_dist?: string;

  @Property({ type: 'boolean', default: false })
  area_actv!: boolean;
}

@Entity()
export class Addresses {
  @PrimaryKey()
  addr_id!: number;

  @ManyToOne(() => Areas, { fieldName: 'addr_area' })
  addr_area: Areas;

  @Property({ type: 'varchar', length: 30, nullable: true })
  addr_nbhd?: string;

  @Property({ type: 'varchar', length: 30, nullable: true })
  addr_str?: string;

  @Property({ type: 'varchar', length: 30 })
  addr_bld!: string;

  @Property({ type: 'smallint' })
  addr_flr!: number;

  @Property({ type: 'smallint' })
  addr_apt!: number;

  @Property({ type: 'varchar', length: 125, nullable: true })
  addr_note?: string;

  @ManyToOne(() => Users, { fieldName: 'addr_user' })
  addr_user: Users;
}

@Entity()
export class Routes {
  @PrimaryKey()
  rout_id!: number;

  @Property({ type: 'smallint' })
  rout_day!: number;

  @Property({ type: 'smallint' })
  rout_start!: number;

  @Property({ type: 'smallint' })
  rout_end!: number;

  @Property({ type: 'smallint' })
  rout_interval!: number;

  @Property({ type: 'numeric', precision: 5, scale: 2, default: 0 })
  rout_fee!: number;

  @Property({ type: 'array', default: [] })
  rout_employees!: number[];

  @Property({ type: 'boolean', default: false })
  rout_actv!: boolean;

  @ManyToOne(() => Areas, { fieldName: 'rout_area' })
  rout_area: Areas;
}

@Entity()
export class Categories {
  @PrimaryKey()
  ctgy_id!: number;

  @Property({ type: 'smallint', default: 0 })
  ctgy_level!: number;

  @Property({ type: 'smallint' })
  ctgy_parent!: number;

  @Property({ type: 'varchar', length: 30 })
  ctgy_desc!: string;

  @Property({ type: 'bytea', nullable: true })
  ctgy_img?: Buffer;

  @Property({ type: 'boolean', default: false })
  ctgy_actv!: boolean;
}

@Entity()
export class Units {
  @PrimaryKey()
  unit_id!: number;

  @Property({ type: 'varchar', length: 20 })
  unit_name!: string;

  @Property({ type: 'varchar', length: 5 })
  unit_abb!: string;

  @Property({ type: 'boolean', default: true })
  unit_rnd!: boolean;
}

@Entity()
export class Products {
  @PrimaryKey()
  prod_id!: number;

  @Property({ type: 'varchar' })
  @Index({ name: 'products_ix_barcode' })
  @Unique({ name: 'products_uq_barcode' })
  prod_barcode!: string;

  @Property({ type: 'varchar', length: 30 })
  @Index({ name: 'products_ix_desc' })
  @Unique({ name: 'products_uq_desc' })
  prod_desc!: string;

  @Property({ type: 'numeric', precision: 7, scale: 2, default: 0 })
  prod_curr!: number;

  @Property({ type: 'numeric', precision: 7, scale: 2, default: 0 })
  prod_prev!: number;

  @Property({ type: 'boolean', default: false })
  prod_promo!: boolean;

  @Property({ type: 'boolean', default: false })
  prod_actv!: boolean;

  @Property({ type: 'bytea', nullable: true })
  prod_img?: Buffer;

  @ManyToOne(() => Categories, { fieldName: 'prod_ctgy' })
  prod_ctgy: Categories;

  @ManyToOne(() => Units, { fieldName: 'prod_unit' })
  prod_unit: Units;
}

@Entity()
export class OprTypes {
  @PrimaryKey()
  opty_id!: number;

  @Property({ type: 'varchar', length: 20 })
  opty_desc!: string;

  @Property({ type: 'smallint', default: 0 })
  opty_mp!: number;
}

@Entity()
export class OprStates {
  @PrimaryKey()
  opst_id!: number;

  @Property({ type: 'varchar', length: 20 })
  opst_desc!: string;

  @Property({ type: 'smallint', default: 0 })
  opst_mp!: number;
}

@Entity()
export class Operations {
  @PrimaryKey()
  oper_id!: number;

  @ManyToOne(() => OprTypes, { fieldName: 'oper_type' })
  oper_type: OprTypes;

  @ManyToOne(() => OprStates, { fieldName: 'oper_state' })
  oper_state: OprStates;

  @Property({ type: 'timestamp', length: 0 })
  oper_created!: string;

  @Property({ type: 'timestamp', length: 0, nullable: true })
  oper_due?: string;

  @Property({ type: 'timestamp', length: 0, nullable: true })
  oper_fin?: string;

  @Property({ type: 'smallint' })
  oper_period!: number;

  @ManyToOne(() => Users, { fieldName: 'oper_client' })
  oper_client: Users;

  @ManyToOne(() => Addresses, { fieldName: 'oper_addr' })
  oper_addr: Addresses;

  @ManyToOne(() => Users, { fieldName: 'oper_sales' })
  oper_sales: Users;

  @ManyToOne(() => Users, { fieldName: 'oper_delivery', nullable: true })
  oper_delivery?: Users;

  @Property({ type: 'varchar', length: 125, nullable: true })
  oper_note?: string;

  @Property({ type: 'array', nullable: true })
  oper_vouchers?: string[];
}

@Entity()
export class OprItems {
  @PrimaryKey()
  opit_id!: number;

  @ManyToOne(() => Products, { fieldName: 'opit_prod' })
  opit_prod: Products;

  @ManyToOne(() => Operations, { fieldName: 'opit_oper' })
  opit_oper: Operations;

  @Property({ type: 'numeric', precision: 4, scale: 2 })
  opit_qty!: number;

  @Property({ type: 'numeric', precision: 7, scale: 2 })
  opit_val!: number;
}

@Entity()
export class Vouchers {
  @PrimaryKey()
  voch_id!: number;

  @Property({ type: 'varchar', length: 15 })
  voch_str!: string;

  @Property({ type: 'timestamp', length: 0 })
  voch_start!: string;

  @Property({ type: 'timestamp', length: 0 })
  voch_end!: string;

  @Property({ type: 'varchar', length: 125 })
  voch_desc!: string;

  @Property({ type: 'jsonb', nullable: true })
  voch_config?: { foo: number; bar: number };
}
