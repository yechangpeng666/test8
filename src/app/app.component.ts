import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  imgUrl: string;
  url: string;

  constructor() {
    this.title = "hello"
    this.imgUrl = "./assets/imgs/u=1238043994,1992604562&fm=26&gp=0.jpg";
    this.url = "https://www.baidu.com";
  }
  onBtnClicked() {
    console.log("哈哈哈")
  }
  onInput(evt: Event) {
    this.title = (<HTMLInputElement>evt.target).value;
  }
}
