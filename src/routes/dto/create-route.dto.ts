import { Areas } from 'src/database/entities';

export class CreateRouteDto {
  rout_day: number;
  rout_start: number;
  rout_end: number;
  rout_interval: number;
  rout_fee: number;
  rout_employees: number[];
  rout_actv: boolean;
  rout_area: Areas;
}
