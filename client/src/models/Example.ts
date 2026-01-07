export class Example {
  id: number;
  exampleText: string;

  constructor(data: { id: number; exampleText: string }) {
    this.id = data.id;
    this.exampleText = data.exampleText;
  }
}
