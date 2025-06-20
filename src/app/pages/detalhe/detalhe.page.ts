import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {
  anuncio: any;

  anuncios = [
    {
      id: 0,
      titulo: 'Civic 2020',
      tipo: 'Carro',
      descricao: 'Sedan, econômico e confortável',
      preco: 'R$ 95.000',
      imagem: 'assets/civic.webp',
    },
    {
      id: 1,
      titulo: 'Yamaha MT-03',
      tipo: 'Moto',
      descricao: 'Esportiva e leve',
      preco: 'R$ 28.000',
      imagem: 'assets/moto.jpg',
    },
    {
      id: 2,
      titulo: 'Cesna 172',
      tipo: 'Avião',
      descricao: 'Monomotor, 4 lugares',
      preco: 'R$ 1.200.000',
      imagem: 'assets/aviao1.webp',
    },
    {
      id: 3,
      titulo: 'Lancha Focker 215',
      tipo: 'Lancha',
      descricao: 'Luxuosa e potente',
      preco: 'R$ 300.000',
      imagem: 'assets/lancha.webp',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      const id = Number(idParam);
      this.anuncio = this.anuncios.find((a) => a.id === id); //usa o id para acesar o anuncio
    }
  }
}
