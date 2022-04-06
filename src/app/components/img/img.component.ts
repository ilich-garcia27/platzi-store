import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input() img!: string;
  @Output() loaded = new EventEmitter<string>();
  defaultImg = './assets/images/default.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  onImgError() {
    this.img = this.defaultImg;
  }

  imgLoaded() {
    console.log('Child log');
    this.loaded.emit(this.img);
  }
}
