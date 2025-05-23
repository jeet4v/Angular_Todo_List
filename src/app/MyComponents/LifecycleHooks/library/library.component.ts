import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { LibraryBookComponent } from "../library-book/library-book.component";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-library',
  imports: [LibraryBookComponent, NgIf],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  TotalBooks: number = 0;
  @ViewChild('BookContainer',  { read: ViewContainerRef, static: true })
  BookContainer!: ViewContainerRef;


  constructor() {
    console.log("Parent(Library) Constructor called.");
  }
  ngOnInit(): void {
    console.log("Parent(Library) OnInit called.");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Parent(Library) OnChanges called.");
  }
  ngDoCheck(): void {
    console.log("Parent(Library) DoCheck called.");
  }
  ngAfterContentInit(): void {
    console.log("Parent(Library) AfterContentInit called.");
  }
  ngAfterContentChecked(): void {
    console.log("Parent(Library) AfterContentChecked called.");
  }
  ngAfterViewInit(): void {
    console.log("Parent(Library) AfterViewInit called.");
  }
  ngAfterViewChecked(): void {
    console.log("Parent(Library) AfterViewChecked called.");
  }
  ngOnDestroy(): void {
    console.log("Parent(Library) OnDestroy called.");
  }

  // AddBook(): void {
  //   this.TotalBooks++;
  //   let componentRef = this.BookContainer.createComponent(LibraryBookComponent);
  //   componentRef.instance.BookName = "Book " + this.TotalBooks;
  // }
  // RemoveBook(): void {
  //   if (this.TotalBooks > 0){
  //     this.TotalBooks = 0;
  //     this.BookContainer.clear();
  //   }
  // }

  RemoveBookConditional(): void {
      this.TotalBooks++;
  }

  ResetCounter(): void {
      this.TotalBooks = 0;
  }

}
