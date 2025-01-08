import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProfileDescriptionComponent,ProfilePhotoComponent,SocialLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'userprofile';
}
