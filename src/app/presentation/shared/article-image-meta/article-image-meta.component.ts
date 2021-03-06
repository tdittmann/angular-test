import {Component, Input} from '@angular/core';
import {Article} from '../../../core/domain/article.model';

@Component({
    selector: 'article-image-meta',
    templateUrl: 'article-image-meta.component.html',
    styleUrls: ['article-image-meta.component.scss']
})
export class ArticleImageMetaComponent {

    @Input() article: Article;
    @Input() showOnlyTitle = false;

    constructor() {

    }

    showCategory(): boolean {
        return this.article && this.article.categoryName && !this.showOnlyTitle;
    }

    showAuthor(): boolean {
        return this.article && this.article.createdBy && !this.showOnlyTitle;
    }

    showMeta(): boolean {
        return this.article && !this.showOnlyTitle;
    }

}
