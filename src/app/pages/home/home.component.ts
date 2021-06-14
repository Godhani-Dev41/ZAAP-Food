import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CategoryDataService } from 'src/app/services/category-data.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  categoryItemsIds$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  categoryItemsIds: string[];
  categoryProducts$: Observable<any>;
  menuCode = 'MAINMENU';
  modalRef: BsModalRef;
  filterOptions = [
    { title: 'price', name: 'itemPrice' },
    { title: 'calories', name: 'calories' },
  ];

  private subsink = new SubSink();

  constructor(
    private categoryDataService: CategoryDataService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.categoryProducts$ = this.categoryDataService.getCategoriesProduct();
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-dialog-centered' })
    );
  }

  getCategoriesProductByFilter(filterName: string) {
    this.categoryProducts$ =
      this.categoryDataService.getCategoriesProductByFilter(filterName);
    this.modalService.hide();
  }

  resetFilters(): void {
    this.categoryProducts$ = this.categoryDataService.getCategoriesProduct();
    this.modalService.hide();
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
