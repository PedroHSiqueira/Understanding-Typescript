import { Draggable } from "../models/drag-drop.js";
import { Project } from "../models/project-model.js";
import { Component } from "./base-component.js";
import { autoBind } from "../decorator/autobind.js";

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable{
  private project: Project;

  get persons() {
    if (this.project.people === 1) {
      return `1 person`;
    } else {
      return `${this.project.people} Persons`;
    }
  }

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @autoBind
  public dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  public dragEndHandler(event: DragEvent): void {
    console.log(event.dataTransfer!.getData("text/plain"));
  }

  public configure(): void {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  public renderContent(): void {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons + " assigned";
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}
