import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IZYCOrder } from 'src/app/models/order.model';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
})
export class PlaceOrderComponent implements OnInit, OnDestroy {
  private destroyed$ = new ReplaySubject<boolean>(1);
  public orders: IZYCOrder[] = [];
  max = 100;
  value = 15;
  constructor(private db: AngularFirestore) {}

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

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
