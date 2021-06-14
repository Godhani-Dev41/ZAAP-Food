import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryDataService {
  categoriesZone$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  productsByZone$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  detail: any;

  constructor(private db: AngularFirestore, private router: Router) {}

  getCategoriesZone(): Observable<any[]> {
    return this.db.collection('/ZYCZone').valueChanges();
  }

  getCategoriesProduct(): Observable<any> {
    return this.db.collection('/ZYCProduct').valueChanges();
  }

  getCategoriesProductByFilter(propName: string): Observable<any> {
    return this.db
      .collection('/ZYCProduct', (ref) => ref.orderBy(propName))
      .valueChanges();
  }

  getCategories(): Observable<any> {
    return this.db.collection('/ZYCCategory').valueChanges();
  }

  setProductByZoneName(zoneName: string) {
    this.getCategoriesProduct().subscribe((val: any[]) => {
      this.productsByZone$.next(val.filter((v) => v.zoneCode === zoneName));
    });
  }

  getProductByZoneName(zoneName: string): Observable<any[]> {
    this.getCategoriesProduct().subscribe((val: any[]) => {
      this.productsByZone$.next(val.filter((v) => v.zoneCode === zoneName));
    });
    return this.productsByZone$.asObservable();
  }

  getProductByKey(key: string): Observable<any> {
    return this.db.doc('/ZYCProduct/' + key).valueChanges();
  }
}
