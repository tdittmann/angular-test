import {Component, OnInit} from '@angular/core';
import {Profile} from '../../../core/domain/profile.model';
import {ProfileService} from '../../../dataproviders/profile/profile.service';
import {ToastService} from '../../../dataproviders/toast.service';
import {StorageService} from '../../../dataproviders/storage.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {

    heading: string;
    profile: Profile = new Profile();

    constructor(private activatedRoute: ActivatedRoute,
                private profileService: ProfileService,
                private toastService: ToastService,
                private storageService: StorageService) {

    }

    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.heading = queryParams['heading'];
            }
        );

        this.storageService.loadPushToken()
            .then(
                (token: string) => {
                    // this.profile.pushToken = token;
                    this.loadProfile(token);
                },
                (error) => {
                    console.error('Can not load from local storage: ' + error);
                }
            );
    }

    saveProfile() {
        this.profileService.saveProfile(this.profile)
            .subscribe(
                (result: Profile) => {
                    this.toastService.showToast('Ihr Profil wurde erfolgreich aktualisiert');
                },
                (error) => {
                    this.toastService.showToast('Speichern fehlgeschlagen! Bitte erneut versuchen.');
                    console.error('Saving profile failed: ' + error);
                }
            );
    }

    private loadProfile(token: string) {
        this.profileService.loadProfile(token)
            .subscribe(
                (profile: Profile) => {
                    this.profile = profile;
                },
                (error) => {
                    console.error('Can not load profile from remote db: ' + error);
                }
            );
    }

}
