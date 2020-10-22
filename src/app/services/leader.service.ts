import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader():Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }

  getLeaders(id: String): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((lead)=> (lead.id===id))[0]);
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((lead)=> lead.featured)[0]);
  }
}
