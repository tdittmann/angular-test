import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {RankingTeamJson} from './rankingTeamJson.model';
import {RankingTeam} from '../../../core/domain/rankingTeam.model';
import {map, tap} from 'rxjs/operators';
import {RankingTeamMapper} from './rankingTeam.mapper';
import {HttpService} from '../../http.service';

@Injectable()
export class RankingService {

    rankingTeamMapper = new RankingTeamMapper();

    constructor(private httpService: HttpService) {

    }

    loadRanking(teamId: number): Observable<RankingTeam[]> {
        return this.httpService
            .get<RankingTeamJson[]>(environment.backendUrl + 'ranking?teamId=' + teamId)
            .pipe(map(pRankingTeam => pRankingTeam.map(this.rankingTeamMapper.mapFrom)))
            .pipe(tap(pRankingTeam => pRankingTeam.sort(((a, b) => a.compareTo(b)))))
            .pipe(map(pRankingTeam => {
                for (let i = 0; i < pRankingTeam.length; i++) {
                    pRankingTeam[i].place = i + 1;
                }
                return pRankingTeam;
            }));
    }

}
