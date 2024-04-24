export class CreateAreaDto {
  area_level!: number;
  area_parent!: number;
  area_gov?: string;
  area_div?: string;
  area_city?: string;
  area_dist?: string;
  area_actv!: boolean;
}
