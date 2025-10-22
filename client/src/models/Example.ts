export class Example {
  id: number;
  exampleString: string;

  constructor(data: { id: number; exampleString: string }){
    this.id = data.id;
    this.exampleString = data.exampleString;
  }
}