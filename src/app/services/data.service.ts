import { Injectable } from '@angular/core';
import { SocialLink } from '../models/social-link';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   linkTab: SocialLink[] = [
      {
       name: 'Github', link:'github.com/'},
       {name: 'LinkedIN',link:'linkedIN.com'},
       {name:'Twitter', link:'snapchat.com'},
      ]

      profile: UserProfile[]=[
        {
          image: "profile.jpg",
          fullname: "Cedric NYAMBA",
          location: "",
          links:[],
        },

        {
          image: "profile1.jpg",
          fullname: "Cedric NYAMBA",
          location: "",
          links:[],
        },


        {
          image: "profile2.jpg",
          fullname: "Cedric NYAMBA",
          location: "",
          links:[],
        },


        {
          image: "profile3.jpg",
          fullname: "Cedric NYAMBA",
          location: "",
          links:[],
        },
      ]

  constructor() { }


  getLinks(): SocialLink[]{
    return this.linkTab
  }
}
