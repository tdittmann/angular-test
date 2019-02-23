import {Component, Input} from '@angular/core';
import * as underscore from 'node_modules/underscore.string';

@Component({
    selector: 'article-card',
    templateUrl: 'article-card.component.html',
    styleUrls: ['article-card.component.scss']
})
export class ArticleCardComponent {

    @Input() image: string;
    @Input() subTitle: string;
    @Input() title: string;
    @Input() footerIcon: string;
    @Input() footerText: string;

    showImage(): boolean {
        return !underscore.isBlank(underscore.clean(this.image));
    }

    showSubTitle(): boolean {
        return !underscore.isBlank(underscore.clean(this.subTitle));
    }

    showFooter(): boolean {
        return !underscore.isBlank(underscore.clean(this.footerText));
    }

    showFooterIcon(): boolean {
        return !underscore.isBlank(underscore.clean(this.footerIcon));
    }

}
