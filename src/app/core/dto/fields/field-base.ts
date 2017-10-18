export class FieldBase<T>{
  key?: string;
  label?: string;
  required?: boolean;
  order: number;
  controlType?: string;
  options?: {key: string, value: string}[] ;
  dependant? : string;
  value? : string;
  quizId : number;
}