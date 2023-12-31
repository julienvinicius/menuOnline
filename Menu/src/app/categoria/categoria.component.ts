import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Importe Router
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  categoria: any;

  constructor(private route: ActivatedRoute, private router: Router, private menuService: MenuService) {}  
  ngOnInit(): void {
    const categoriaIdString = this.route.snapshot.paramMap.get('id');

    if (categoriaIdString !== null && categoriaIdString !== undefined) {
      const categoriaId = +categoriaIdString;
      this.categoria = this.menuService.getCategorias().find((c) => c.id === categoriaId);
    } else {
    }
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
