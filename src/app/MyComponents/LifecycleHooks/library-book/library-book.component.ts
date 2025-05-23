import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-library-book',
  imports: [],
  templateUrl: './library-book.component.html',
  styleUrl: './library-book.component.css'
})
export class LibraryBookComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() BookName: string = "Book Name (Default)";
  
  constructor() {
    console.log("Child(Book) Constructor called.");
    this.BookName = "Book Name (Constructor)";
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child(Book) OnChanges called. ");
    console.log(changes);
    this.BookName = "Book Name (OnChanges)";
  }
  ngOnInit(): void {
    console.log("Child(Book) OnInit called.");
    this.BookName = "Book Name (OnInit)";
  }
  ngDoCheck(): void {
    console.log("Child(Book) DoCheck called.");
  }
  ngAfterContentInit(): void {
    console.log("Child(Book) AfterContentInit called.");
  }
  ngAfterContentChecked(): void {
    console.log("Child(Book) AfterContentChecked called.");
  }
  ngAfterViewInit(): void {
    console.log("Child(Book) AfterViewInit called.");
  }
  ngAfterViewChecked(): void {
    console.log("Child(Book) AfterViewChecked called.");
  }
  ngOnDestroy(): void {
    console.log("Child(Book) OnDestroy called.");
  }

}
