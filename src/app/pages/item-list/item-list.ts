import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-list',
  imports: [RouterLink],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList {}
