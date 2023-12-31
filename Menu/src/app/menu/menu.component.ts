// menu.component.ts
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  categorias: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.categorias = this.menuService.getCategorias();
  }
}
