import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  imports: [],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {

@Input()
name = 'Empty';

getlink(): void{
  console.log(this.name);
}



}
