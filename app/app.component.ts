import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite.component'
import { LikeComponent } from './like.component'
import { SummaryPipe } from './summary.pipe'
import {ContactFormComponent} from './contact-form.component'
import {SubscriptionFormComponent} from './subscription-form.component'
import {ChangePasswordFormComponent} from './change-password-form.component'


@Component({
    selector: 'my-app',
    template: `'<h1>My First Angular App</h1>
        <courses></courses>
        <favorite [isFavorite]="isFav"></favorite>
        <like [isLiked]="isLiked" [Likes] = "Likes"></like>'
        <contact-form></contact-form>
        <password-form></password-form>`,
    directives: [CoursesComponent, FavoriteComponent, LikeComponent, ContactFormComponent, SubscriptionFormComponent, ChangePasswordFormComponent],
    pipes: [SummaryPipe]
})
export class AppComponent {

    isFav = true;
    Likes = 5;
    isLiked = true;
}