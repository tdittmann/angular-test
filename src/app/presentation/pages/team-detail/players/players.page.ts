import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../../../../dataproviders/soccer/players/player.service';
import {Player} from '../../../../core/domain/player.model';
import {ModalController} from '@ionic/angular';
import {PersonPage} from '../../person/person.page';

@Component({
    selector: 'players',
    templateUrl: 'players.page.html',
    styleUrls: ['players.page.scss']
})
export class PlayersPage implements OnInit {

    players: Player[] = [];
    lastPosition: string = null;

    constructor(private route: ActivatedRoute,
                private playerService: PlayerService,
                private modalController: ModalController) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                this.playerService.loadPlayers(teamId).subscribe(
                    players => {
                        this.players = players;
                    },
                    error => {
                        // TODO tdit0703: Error handling
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

    public isDifferentPosition(pPlayer: Player): boolean {
        const showHeader = (pPlayer.position !== this.lastPosition);
        this.lastPosition = pPlayer.position;
        return showHeader;
    }

}
