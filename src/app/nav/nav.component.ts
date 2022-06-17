import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, OnDestroy {
  public isAuthanticated: boolean = false;
  private authListenerSubs?: Subscription;

  constructor(private authServise: AuthService) {}

  ngOnInit(): void {
    this.authListenerSubs = this.authServise
      .getAuthStatusListener()
      .subscribe((isAuthanticated) => {
        this.isAuthanticated = isAuthanticated;
      });
  }

  ngOnDestroy(): void {
    this.authListenerSubs?.unsubscribe();
  }
}
