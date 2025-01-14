import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { SocialLink } from './models/social-link';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProfileDescriptionComponent,ProfilePhotoComponent,SocialLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'User Profile';
  selectedLink ="Empty selection";
  screenStyle: string= "screen";

 linkTab: SocialLink[]= []
 

 constructor (private dataService: DataService){}

 ngOnInit(){
 console.log('from ngOnInit');
 this.linkTab = this.dataService.getLinks()

}
  

  displayLink(value:SocialLink){
    this.selectedLink =value.link;
  }

  resetLink() {
    this.selectedLink = "Empty selection";
  }

}
