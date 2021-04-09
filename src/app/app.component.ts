import {Component} from '@angular/core';


export interface Post {
  id: number;
  title: string;
  body: string;
  postImg: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
