import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleBlog';

  post = [
    {
      id: 1,
      title: "lorem",
      body: "lorem iőpsum lorem ipsum"
    },
    {
      id: 2,
      title: "lorem",
      body: "lorem iőpsum lorem ipsum"
    },
    {
      id: 3,
      title: "lorem",
      body: "lorem iőpsum lorem ipsum"
    },
    {
      id: 4,
      title: "lorem",
      body: "lorem iőpsum lorem ipsum"
    },
  ]

}
