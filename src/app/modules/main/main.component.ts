import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { fadeAnimation } from '../shared/animations/fade.animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  animations: [fadeAnimation],
})
export class MainComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private subscription = new Subscription();
  isAnimation: boolean = true;
  changeDetector = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.setScrollToTopOnNavigation();
  }

  // แก้ error NG0100: ExpressionChangedAfterItHasBeenCheckedErro
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //private componentBeforeNavigation = null;
  private setScrollToTopOnNavigation() {
    this.subscription = this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart || event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationStart | NavigationEnd) => {
        if (event instanceof NavigationStart) this.isAnimation = false;
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
          setTimeout(() => {
            this.isAnimation = true;
          }, 600);
        }

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
