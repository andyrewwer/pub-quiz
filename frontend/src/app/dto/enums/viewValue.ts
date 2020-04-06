export class ViewValue {

  value: any;
  viewValue: string;

  constructor(args: ViewValue = <ViewValue>{}) {
    this.value = args.value;
    this.viewValue = args.viewValue;
  }
}
