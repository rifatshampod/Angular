import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader():Promise<Leader[]>{
    //return Promise.resolve(LEADERS);
    return of(LEADERS).pipe(delay(2000)).toPromise();
    // return new Promise(resolve=> {
    //   // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(PROMOTIONS), 2000);
    // });
  }

  getLeaders(id: String): Promise<Leader> {
    //return Promise.resolve(LEADERS.filter((lead)=> (lead.id===id))[0]);
    return of(LEADERS.filter((lead) => (lead.id === id))[0]).pipe(delay(2000)).toPromise();
    // return new Promise(resolve=> {
    //   // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    // });
  }

  getFeaturedLeader(): Promise<Leader> {
    //return Promise.resolve(LEADERS.filter((lead)=> lead.featured)[0]);
    return of(LEADERS.filter((lead) => lead.featured)[0]).pipe(delay(2000)).toPromise();
    // return  new Promise(resolve=> {
    //   // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    // });
  }
}
