import { Component } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDH_fzz6C0f4kptb6OHgUB_0NoG45rOSbU",
  authDomain: "lorenzotade-dev.firebaseapp.com",
  projectId: "lorenzotade-dev",
  storageBucket: "lorenzotade-dev.appspot.com",
  messagingSenderId: "954541795844",
  appId: "1:954541795844:web:a140bab5d840251819a351",
  measurementId: "G-6NBKF9BF13"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
