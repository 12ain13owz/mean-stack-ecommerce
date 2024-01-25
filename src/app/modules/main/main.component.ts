import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  // private route = inject(ActivatedRoute);
  private subscription = new Subscription();

  ngOnInit(): void {
    this.setScrollToTopOnNavigation();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //private componentBeforeNavigation = null;
  private setScrollToTopOnNavigation() {
    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        window.scrollTo(0, 0);

        // Scroll to top only when navigating to a different component
        // let currentRoute = this.route;
        // while (currentRoute.firstChild) currentRoute = currentRoute.firstChild;
        // if (this.componentBeforeNavigation !== currentRoute.component) {
        //   if (window) window.scrollTo(0, 0);
        // }
        // this.componentBeforeNavigation = currentRoute.component;
      });
  }
}
