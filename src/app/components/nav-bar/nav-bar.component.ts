import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  mobileMenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Animation du bouton du menu mobile
  toggleMobileMenu(){
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
