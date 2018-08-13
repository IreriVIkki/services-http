export class Goal {
  public showDescription: boolean;
  constructor(
    public id: number,
    public name: String,
    public description: String,
    public completionDate: Date
  ) {
    this.showDescription = false;
  }
}
