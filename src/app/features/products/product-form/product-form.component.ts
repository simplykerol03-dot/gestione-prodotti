import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  private route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
  isEdit = !!this.id;
}