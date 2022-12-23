import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output()  onServerCreated = new EventEmitter<{name: string, content: string}>();
  @Output() onBlueprintCreated = new EventEmitter<{name: string, content: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(input: HTMLInputElement) {
   this.onServerCreated.emit({name: input.value, content: this.newServerContent});
  }

  onAddBlueprint(input: HTMLInputElement) {
    this.onBlueprintCreated.emit({name: input.value, content: this.newServerContent});
  }

}
