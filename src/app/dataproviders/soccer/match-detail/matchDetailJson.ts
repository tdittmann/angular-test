export interface MatchDetailJson {

    matchId: string;
    date: string;
    location: string;
    fixture: string;

    home_id: string;
    home_name: string;
    home_logo: string;
    home_result: string;

    away_id: string;
    away_name: string;
    away_logo: string;
    away_result: string;

    events: MatchEventJson[];

}

export class MatchEventJson {

    clubId: string;
    teamplayerId: string;
    firstname: string;
    lastname: string;
    time: string;
    icon: string;

    cameInForFirstname: string;
    cameInForLastname: string;
}
