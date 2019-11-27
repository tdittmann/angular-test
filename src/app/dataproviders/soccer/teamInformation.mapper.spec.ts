import {TeamInformationMapper} from './teamInformation.mapper';
import {TeamInformationJson, TeamInformationSeasonJson} from './teamInformationJson.model';
import {TeamInformation, TeamInformationSeason} from '../../core/domain/teamInformation.model';

describe('TeamInformationMapper', () => {

    let mapper: TeamInformationMapper;

    beforeEach(() => {
        mapper = new TeamInformationMapper();
    });

    it('should handle null values for mapFrom', () => {
        expect(mapper.mapFrom(null)).toBe(null);
    });

    it('should map from json to core model', () => {
        const actualSeasons: TeamInformationSeasonJson[] = [
            {id: '90', name: '13/14'},
            {id: '91', name: '14/15'},
        ];

        const actual: TeamInformationJson = {
            name: '1. Mannschaft',
            showRanking: true,
            showFixture: false,
            showPlayers: true,
            showStatistics: false,
            showSeasons: true,
            seasons: actualSeasons
        };

        const teamInformationSeason1 = new TeamInformationSeason();
        teamInformationSeason1.projectId = 90;
        teamInformationSeason1.name = '13/14';

        const teamInformationSeason2 = new TeamInformationSeason();
        teamInformationSeason2.projectId = 91;
        teamInformationSeason2.name = '14/15';

        const expected: TeamInformation = new TeamInformation();
        expected.name = '1. Mannschaft';
        expected.showRanking = true;
        expected.showFixture = false;
        expected.showPlayers = true;
        expected.showStatistics = false;
        expected.showSeasons = true;
        expected.seasons = [teamInformationSeason2, teamInformationSeason1];

        expect(mapper.mapFrom(actual)).toEqual(expected);
    });

});
