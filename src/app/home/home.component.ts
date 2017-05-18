import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var Masonry: any;

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('masonry') masonry: ElementRef;

    constructor() {}

    ngOnInit() {

    }

    ngAfterViewInit() {
        new Masonry(this.masonry.nativeElement, {
            // options
            itemSelector: '.masonry-item',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    }

}
