import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RankingService} from '../../../../dataproviders/soccer/ranking/ranking.service';
import {RankingTeam} from '../../../../core/domain/rankingTeam.model';
import {ErrorService} from '../../../shared/error/error.service';
import {LoadingService} from '../../../shared/loading/loading.service';

@Component({
    templateUrl: 'ranking.page.html',
    styleUrls: ['ranking.page.scss']
})
export class RankingPage implements OnInit {

    rankingTeams: RankingTeam[] = [];

    constructor(private route: ActivatedRoute,
                private rankingService: RankingService,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                this.rankingService.loadRanking(teamId).subscribe(
                    rankingTeams => {
                        this.rankingTeams = rankingTeams;

                        this.loadingService.hideLoading();
                    },
                    error => this.errorService.showError(error)
                );

            }
        );
    }

}
