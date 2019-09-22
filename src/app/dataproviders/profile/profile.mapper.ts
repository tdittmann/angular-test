import {Mapper} from '../../core/base/mapper';
import {ProfileJson} from './profileJson.model';
import {Profile} from '../../core/domain/profile.model';

export class ProfileMapper implements Mapper<ProfileJson, Profile> {

    mapFrom(param: ProfileJson): Profile {
        if (!param) {
            return null;
        }

        const profile: Profile = new Profile();
        profile.pushToken = param.pushToken;
        profile.name = param.name;
        profile.pushBirthdays = param.pushBirthdays;

        return profile;
    }

    mapTo(param: Profile): ProfileJson {
        if (!param) {
            return null;
        }

        return {
            pushToken: param.pushToken,
            name: param.name,
            pushBirthdays: param.pushBirthdays
        };
    }

}