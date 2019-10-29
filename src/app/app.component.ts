import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    //created = new Date();

    posts = [
      new Post( 
        'Mon premier post',
        'blabla 1 erfofsuierfuinfuoj, jfbbsfubsbhjhhhvvhvthgvhvhgvtvhvhgvhgvhgvhhjhhfhfhghhfhfghfghhjfjhjjhjkfjhjjfghfghgjfjkhjghjhf, gvhvghvhvhvhvhgvhvhvhvhgvhvhvhvhvhgvhvhgvhgv',
         0),
      new Post(
        'Mon deuxieme post',
        'blabla 2 weirjjksfdkbhffvsfvgvsgfvgh',
         0),
      new Post(
         'Mon troisieme post',
         'blabla 3 fdsjkfjdkiageio hsdbfhjsebjfhshj',
          0),
  ];

}
