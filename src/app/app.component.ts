import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test2';
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';
}
