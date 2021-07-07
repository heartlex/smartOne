import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smartOne';
  isSidebarOpen = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > 100) {
      element.classList.add('navbar-on-scroll');
    } else {
      element.classList.remove('navbar-on-scroll');
    }
  }

  openSidebar(): void {
    // document.getElementById("rightMenu").style.display = "block";
    this.isSidebarOpen = true;
  }

  closeSidebar():void {
    // document.getElementById("rightMenu").style.display = "none";
    this.isSidebarOpen = false;
  }
}
