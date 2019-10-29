import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { 
    setInterval(() => {
      this.created_at = new Date()
    }, 1000)
  }

  ngOnInit() {
  }

  getLoveIts() {
    return this.loveIts;
  }

  onAddLoveIts() {
    this.loveIts++;
    console.log ("loveIts was added, new stand: " + this.loveIts)
  }

  onTakeLoveIts() {
    this.loveIts--;
    console.log ("loveIts was reduced, new stand: "+this.loveIts)
  }

  getColor() {
    if(this.loveIts > 0 ) {
      return 'green';
    } else if(this.loveIts < 0){
      return 'red';
    } else {
      return 'black';
    }
  }
}
