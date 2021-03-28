export class QuestionBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  options: {key: string, description: string}[];
  optionsList: string;
  disabled: boolean;
  type: string;
  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      optionsList?:string,
      options?:{key: string, description: string}[],
      disabled?:boolean,
      type?:string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.optionsList = options.optionsList;
    this.options = options['options'] || [];
    this.disabled = options.disabled;
    this.type= options.type;
  }

  
}