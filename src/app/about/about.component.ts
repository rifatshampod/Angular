import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  Leaders = LEADERS;

  constructor(private leaderservice: LeaderService,
    private route: ActivatedRoute,
    private location: Location) { }

    leader: Leader[];


    ngOnInit() {
      const id = this.route.snapshot.params['id'];
      this.leaderservice.getLeader().then(leader=>this.leader=leader);
    }

    goBack(): void{
      this.location.back();
    }

}
