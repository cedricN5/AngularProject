import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-social-link',
  imports: [],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {

@Input()
name = 'Empty';

@Output()
selectLink = new  EventEmitter<string>(); 


getlink(): void{
  console.log(this.name);
  this.selectLink.emit(this.value + this.name);
}

value="selected Link ";

}
