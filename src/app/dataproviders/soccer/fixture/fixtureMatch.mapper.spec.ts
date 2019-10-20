import {FixtureMatchMapper} from './fixtureMatch.mapper';
import {FixtureMatchJson} from './fixtureMatchJson.model';
import {FixtureMatch} from '../../../core/domain/fixtureMatch.model';
import {DateUtils} from '../../../util/DateUtils';

describe('FixtureMatchMapper', () => {

    let mapper: FixtureMatchMapper;

    beforeEach(() => {
        mapper = new FixtureMatchMapper();
    });

    it('should handle null values for mapFrom', () => {
        expect(mapper.mapFrom(null)).toBe(null);
    });

    it('should map from json to core model', () => {
        const actual: FixtureMatchJson = {
            match_id: '7275',
            project_id: '92',
            date: '1566738000000',
            home_result: '5',
            away_result: '0',
            home_id: '130',
            home_name: 'SGM Home',
            home_image: 'home-image.png',
            away_id: '4',
            away_name: 'SGM Away',
            away_image: 'away-image.png',
            location: 'Dahenfeld',
            fixture: '1. Spieltag'
        };

        const expected: FixtureMatch = new FixtureMatch();
        expected.id = 7275;
        expected.projectId = 92;
        expected.date = DateUtils.ofUnixTimestampString('1566738000000');
        expected.fixture = '1. Spieltag';
        expected.location = 'Dahenfeld';
        expected.homeId = 130;
        expected.homeName = 'SGM Home';
        expected.homeImage = 'home-image.png';
        expected.homeResult = 5;
        expected.awayId = 4;
        expected.awayName = 'SGM Away';
        expected.awayImage = 'away-image.png';
        expected.awayResult = 0;

        expect(mapper.mapFrom(actual)).toEqual(expected);
    });

});
