import { isNgTemplate } from "@angular/compiler";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription, of, from, map, tap, take } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });

    of(2, 4, 6, 8)
      .subscribe(
        item => console.log(item)
      );

    console.log('')

    from([10, 20, 30, 40])
      .pipe(
        tap(item => console.log(`emitted item... ${item}`)),
        map(item => item * 2),
        map(item => item - 10),
        map(item => {
          if (item === 0) {
            throw new Error('zero detected');
          }
          return item;
        }),
        take(3))
      .subscribe({
        next: item => console.log(`resulting item... ${item}`),
        error: err => console.error(`error occured${err}`),
        complete: () => console.log(`complete`),
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
