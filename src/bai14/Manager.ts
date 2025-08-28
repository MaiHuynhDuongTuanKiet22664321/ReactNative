import { Employee } from "./Employee";

export class Manager extends Employee {
  private teamSize: number;
  constructor(name: string, salary: number, teamSize: number) {
    super(name, salary);
    this.teamSize = teamSize;
  }

  getTeamSize(): number {
    return this.teamSize;
  }

  setTeamSize(teamSize: number): void {
    this.teamSize = teamSize;
  }

  manage(): string {
    return `${this.getName()} is managing a team of ${this.teamSize} people.`;
  }
}
