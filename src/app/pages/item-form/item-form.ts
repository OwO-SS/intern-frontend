import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item';

@Component({
  selector: 'app-item-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css'
})
export class ItemForm {
  itemId: number | null = null;

  itemForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('Pending', Validators.required),
    priority: new FormControl('Medium', Validators.required),
    relatedUserId: new FormControl('1', Validators.required)
  });

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.itemId = Number(id);

      this.itemForm.patchValue({
        title: 'Air conditioner broken',
        description: 'Air conditioner is not working',
        status: 'Pending',
        priority: 'High',
        relatedUserId: '1'
      });
    }
  }

  onSubmit() {

    console.log(this.itemForm.value);
    
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      return;
    }

    // if (this.itemId) {
    //   this.itemService.updateItem(this.itemId, this.itemForm.value as any).subscribe(() => {
    //     this.router.navigate(['/items']);
    //   });
    // } else {
    //   this.itemService.createItem(this.itemForm.value as any).subscribe(() => {
    //     this.router.navigate(['/items']);
    //   });
    // }

    this.router.navigate(['/items']);
  }
}