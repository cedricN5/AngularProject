import { Injectable } from '@angular/core';
import { SocialLink } from '../models/social-link';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   linkTab: SocialLink[] = [
      {
       name: 'Github', link:'github.com/'},
       {name: 'LinkedIN',link:'linkedIN.com'},
       {name:'Twitter', link:'snapchat.com'},
      ];

  constructor() { }


  getLinks(): SocialLink[]{
    return this.linkTab
  }
}
