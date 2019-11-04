import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {ArticleCardComponent} from './article-card/article-card.component';
import {NewsPage} from './news.page';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {ArticleSliderModule} from './article-slider/article-slider.module';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        ArticleSliderModule,
        RouterModule.forChild([
            {
                path: '',
                component: NewsPage
            }
        ])
    ],
    declarations: [NewsPage, ArticleCardComponent]
})
export class NewsPageModule {
}
