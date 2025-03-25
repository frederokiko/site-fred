import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VisitCounterService } from '../../visit-counter.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  visitCount$: Observable<number> | undefined;

  constructor(private visitCounterService: VisitCounterService) {}

  ngOnInit() {
    this.visitCount$ = this.visitCounterService.getVisitCount();
  }
   
}
