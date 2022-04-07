import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img!: string;

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('Just change image -> ', this.img);
  }

  @Output() loaded = new EventEmitter<string>();
  defaultImg = './assets/images/default.jpg';
  // counter = 0;
  // counterFunction: number | undefined;

  constructor() {
    // Before rendering. DO NOT run asynchronous requests here. This runs just once.
    console.log('Constructor', 'imgValue -> ', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Before and during rendering. This updates changes on inputs. It runs many times.
    console.log('ngOnChanges', 'imgValue -> ', this.img);
    console.log('Changes: ', changes);
  }

  ngOnInit(): void {
    // Before rendering. We can actually run asynchronous requests here. This runs once, when creating component.
    console.log('ngOnInit', 'imgValue -> ', this.img);
    // this.counterFunction = window.setInterval(() => {
    //   this.counter++;
    //   console.log('Running counter');
    // }, 1000);
  }

  ngAfterViewInit(): void {
    // After rendering. We can handle children from here.
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // When deleting this component.
    console.log('ngOnDestroy');

    // window.clearInterval(this.counterFunction);
  }

  onImgError() {
    this.img = this.defaultImg;
  }

  imgLoaded() {
    console.log('Child log');
    this.loaded.emit(this.img);
  }
}
