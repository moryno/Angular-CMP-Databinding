import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: "server", name: "Test Server", content: "This is a test"}];

  onServerAdded(serverEvent: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverEvent.name,
      content: serverEvent.content
    });
  }

  onBlueprintAdded(serverEvent: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverEvent.name,
      content: serverEvent.content
    });
  }

  
}
