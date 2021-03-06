import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {CalendarPage} from './calendar.page';
import {CalendarService} from '../../../dataproviders/calendar/calendar.service';
import {MatchCardModule} from '../../shared/match-card/match-card.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {EventCardModule} from '../../shared/event-card/event-card.module';

@NgModule({
    providers: [CalendarService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        PageStateModule,
        MatchCardModule,
        EventCardModule,
        RouterModule.forChild([
            {
                path: '',
                component: CalendarPage,
            }
        ]),
    ],
    declarations: [CalendarPage]
})
export class CalendarPageModule {
}
