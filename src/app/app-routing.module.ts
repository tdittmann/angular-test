import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'news', pathMatch: 'full'},
    {path: 'news', loadChildren: './presentation/pages/news/news.module#NewsPageModule'},
    {path: 'article/:id', loadChildren: './presentation/pages/article-detail/article-detail.module#ArticleDetailPageModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
