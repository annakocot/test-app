import { 
  Component, 
  EventEmitter, 
  Input, 
  OnChanges, 
  Output, 
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges{
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  @Output() selectedPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() nextPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() previousPage: EventEmitter<number> = new EventEmitter<number>();

  public pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentPage && changes.currentPage.currentValue ||
       changes.totalPages && changes.totalPages.currentValue) {
        this.pages = this.getPages(this.currentPage, this.totalPages);
    }
  }

  private getPages(current: number, total: number): number[] {
    if (current ===1) {
      return [current, current +1, current +2];
    }

    if (total <= 3) {
      return [...Array(3).keys()].map(x => x++);
    }

    return [current -1, current, current +1]
  }


  public onSelectedPage(page: number): void {
    this.selectedPage.emit(page);
  }

  public onNext(): void {
    this.nextPage.emit(this.currentPage);
  }  

  public onPrevious(): void {
    this.previousPage.next(this.currentPage);
  }

  public previousDisabled(): boolean {
    return (this.currentPage === 1 || this.totalPages === 1);
  }
  
  public nextDisabled(): boolean {
    return this.currentPage === this.totalPages;
  }
}
