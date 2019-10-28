import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule, Routes} from '@angular/router';
import {TeamDetailPage} from './team-detail.page';
import {TeamInformationService} from '../../../dataproviders/soccer/teamInformation.service';

const routes: Routes = [
    {
        path: 'tabs',
        component: TeamDetailPage,
        children: [
            {
                path: 'ranking',
                children: [
                    {
                        path: '',
                        loadChildren: './ranking/ranking.module#RankingPageModule'
                    }
                ]
            },
            {
                path: 'fixture',
                children: [
                    {
                        path: '',
                        loadChildren: './fixture/fixture.module#FixturePageModule'
                    }
                ]
            },
            {
                path: 'players',
                children: [
                    {
                        path: '',
                        loadChildren: './players/players.module#PlayersPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/ranking',
        pathMatch: 'full'
    }
];

@NgModule({
    providers: [TeamInformationService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TeamDetailPage]
})
export class TeamDetailPageModule {

}
