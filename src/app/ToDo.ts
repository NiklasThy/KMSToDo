export class ToDo {
  title: string;
  done: boolean;
  date: Date;
  description: string;
  index: number = 0;
  prioritised: boolean;
  category:string;

  constructor(title: string, desc: string, cat:string) {
    this.title = title;
    this.date = new Date();
    this.description = desc;
    this.done = false;
    this.prioritised = false;
    this.category = cat;
  }
}
