import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IZYCOrder } from 'src/app/models/order.model';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);
  public orders: IZYCOrder[] = [];

  tabs = [
    {
      id: 1,
      title: 'NOW IN-PROCESS',
      active: true,
    },
    {
      id: 2,
      title: 'PAYMENT',
      icon: 'fa fa-file-text-o',
    },
  ];

  constructor(private db: AngularFirestore, private router: Router) {}
  ngOnInit(): void {
    this.getOrders()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        this.orders = res;
      });
  }
  getOrders(): Observable<any[]> {
    return this.db.collection('/ZYCOrder').valueChanges();
  }
  onSelectTab(tab) {
    tab.active = true;
    if (tab.id === 2) {
      this.router.navigate(['order', 'place-order']);
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
