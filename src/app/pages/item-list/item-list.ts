import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ItemService } from '../../services/item';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList {
  items = signal<any[]>([]);

  constructor(private itemService: ItemService,
              public authService: AuthService
  ) {}

  ngOnInit() {
    this.itemService.getItems().subscribe({
      next: (data: any[]) => {
        console.log('data from api:', data);
        this.items.set(data);
        console.log('items length:', this.items().length);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(() => {
      this.items.update(items => items.filter(item => item.id !== id));
    });
  }
}