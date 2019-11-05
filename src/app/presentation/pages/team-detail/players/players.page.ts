import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonService} from '../../../../dataproviders/soccer/person/person.service';
import {Person} from '../../../../core/domain/person.model';
import {ModalController} from '@ionic/angular';
import {PersonPage} from '../../person/person.page';

@Component({
    selector: 'players',
    templateUrl: 'players.page.html',
    styleUrls: ['players.page.scss']
})
export class PlayersPage implements OnInit {

    players: Person[] = [];
    lastPosition: string = null;

    isLoading = true;
    isError = false;

    constructor(private route: ActivatedRoute,
                private playerService: PersonService,
                private modalController: ModalController) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                this.playerService.loadPlayers(teamId).subscribe(
                    players => {
                        this.players = players;

                        this.isLoading = false;
                    },
                    error => {
                        this.isError = true;
                        console.error(error);
                    }
                );
            }
        );
    }

    public openPlayer(personId: number) {
        this.modalController.create({
            component: PersonPage,
            componentProps: {
                'personId': personId
            }
        }).then(modal => modal.present());
    }

    public isDifferentPosition(pPlayer: Person): boolean {
        const showHeader = (pPlayer.position !== this.lastPosition);
        this.lastPosition = pPlayer.position;
        return showHeader;
    }

}
