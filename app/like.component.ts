import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector : 'like',
    template : `
        <i class="glyphicon glyphicon-heart" 
            [style.color]="isLiked ? 'deeppink' : '#ccc'"
            (click)="onClick()">
        </i>
        <span>{{ Likes }}</span>
        `
})
export class LikeComponent {

    @Input () isLiked;
    @Input () Likes;
    @Output () change = new EventEmitter();



    onClick(){
        this.isLiked = !this.isLiked;
        this.Likes += this.isLiked ? 1 : -1;
        this.change.emit({newValue: this.isLiked});
    }
}