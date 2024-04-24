export class CreateCategoryDto {
  ctgy_level!: number;
  ctgy_parent!: number;
  ctgy_desc!: string;
  ctgy_img?: Buffer;
  ctgy_actv!: boolean;
}
