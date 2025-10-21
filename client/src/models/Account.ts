
export class Account {
  id: string;
  email?: string;
  name: string;
  picture: string;

  constructor(data: { id: string; email?: string; name: string; picture: string; }){
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.picture = data.picture;
  }
}