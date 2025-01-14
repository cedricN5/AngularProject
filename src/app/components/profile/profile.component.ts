import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileDescriptionComponent } from '../profile-description/profile-description.component';
import { ProfilePhotoComponent } from '../profile-photo/profile-photo.component';
import { SocialLinkComponent } from '../social-link/social-link.component';
import { SocialLink } from '../../models/social-link';
import { UserProfile } from '../../models/user-profile';

@Component({
  selector: 'app-profile',
  imports: [ ProfileDescriptionComponent, ProfilePhotoComponent,SocialLinkComponent ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  selectedLink: SocialLink={
    name:"",
    link:""
  }

  @Input()
  userProfile!: UserProfile;

  @Output() passDataToRoot= new EventEmitter<SocialLink>();

  handleData(data: SocialLink){
    this.passDataToRoot.emit(data);
  }

}
