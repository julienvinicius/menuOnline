// item.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private menuService: MenuService) {}

  ngOnInit(): void {
    const itemIdString = this.route.snapshot.paramMap.get('id');

    if (itemIdString !== null) {
      const itemId = +itemIdString;
      this.item = this.menuService.getItem(itemId);
    } else {
      // Lógica para lidar com a ausência do parâmetro 'id'
    }
  }
}
