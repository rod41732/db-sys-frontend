import { Injectable } from '@angular/core';
import { MemberCard } from 'src/models';
import { Observable, of } from 'rxjs';

const members: MemberCard[] = [{
  CardID: 1,
},{
  CardID: 2,
},{
  CardID: 3,
}];


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  getMembers(): Observable<MemberCard[]> {
    return of(members);
  }
}
