export class ToDo {
  title: string;
  done: boolean;
  date: Date;
  description: string;
  index: number = 0;

  constructor(title: string, desc: string) {
    this.title = title;
    this.date = new Date();
    this.description = desc;
    this.done = false;
  }
}
