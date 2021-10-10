import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  collapsed = false;

  handleNav() {
    if (window.innerWidth < 904) {
      this.collapsed = !this.collapsed;
    }
  }

}
