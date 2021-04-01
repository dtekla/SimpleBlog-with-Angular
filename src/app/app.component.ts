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
  title = 'simpleBlog';


  posts: Post[] = [
    {
      id: 1,
      title: "lorem magnus",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus massa sem, ac vestibulum lectus porta at. Nunc ac hendrerit nibh, vel rhoncus mauris. Suspendisse ut neque commodo. vestibulum lectus porta at. Nunc ac hendrerit nibh, vel rhoncus mauris. Suspendisse ut neque commod",
      postImg: "https://i.picsum.photos/id/542/400/200.jpg?hmac=lXEDXimc9LYVRRCMHuzne8QS46_GtHUJvynHgQTZq-k"
    },
    {
      id: 2,
      title: "lorem ypsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus massa sem, ac vestibulum lectus porta at. Nunc ac hendrerit nibh, vel rhoncus mauris. Suspendisse ut neque commodo",
      postImg: "https://i.picsum.photos/id/795/400/200.jpg?hmac=TukfBurySj9Pgw-IcqtbJ-WYcvbmp8s42Rl88o-JoP8"
    },
    {
      id: 3,
      title: "lorem maxus",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus massa sem, ac vestibulum lectus porta at. Nunc ac hendrerit nibh, vel rhoncus mauris. Suspendisse ut neque commodo",
      postImg: "https://i.picsum.photos/id/978/400/200.jpg?hmac=AnhJHbHPKaXg1Um-R83jsYfQ67gEvUb-328vkdBPnKE"
    },
    {
      id: 4,
      title: "lorem tipus",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus massa sem, ac vestibulum lectus porta at. Nunc ac hendrerit nibh, vel rhoncus mauris. Suspendisse ut neque commodo",
      postImg: "https://i.picsum.photos/id/928/400/200.jpg?hmac=3j1fhcuit77N5XWbasxoS5JABwCT4tIzW8hcVwaRzWs"
    },
  ]

}
