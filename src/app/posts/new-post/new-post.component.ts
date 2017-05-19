/**
 * Created by mancr on 19-May-17.
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.less']
})
export class NewPostComponent {

    constructor(private location: Location) {
    }

    goBack(): void {
        this.location.back();
    }
}
