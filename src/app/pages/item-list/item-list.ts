import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ItemService } from '../../services/item';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList {
  items = [
    {
      id: 1,
      title: 'owo1',
      status: 'Pending',
      priority: 'High'
    },
    {
      id: 2,
      title: 'owo2',
      status: 'Completed',
      priority: 'Low'
    }
  ]

  constructor(private itemService: ItemService) {}

  deleteItem(id: number) {
    // this.itemService.deleteItem(id).subscribe(() => {
    //   this.items = this.items.filter(item => item.id !== id);
    // });
    this.items = this.items.filter(item => item.id !== id); 
  }

}
