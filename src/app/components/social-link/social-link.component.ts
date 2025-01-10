import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SocialLink } from '../../models/social-link';

@Component({
  selector: 'app-social-link',
  imports: [],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {

@Input()
name = 'Empty';

@Input()
socialLinK: SocialLink | undefined;

@Output()
selectLink = new  EventEmitter<SocialLink>(); 


getlink(): void{

  console.log(this.socialLinK);
  this.selectLink.emit(this.socialLinK);
}

value="selected Link ";

}
