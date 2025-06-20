import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  nome = '';
  nomeSalvo: string | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    const { value } = await Preferences.get({ key: 'usuario' });
    if (value) {
      this.nomeSalvo = value;
    }
  }

  async salvarNome() { //salva o nome do usuario
    if (this.nome.trim()) {
      await Preferences.set({
        key: 'usuario',
        value: this.nome
      });
      this.nomeSalvo = this.nome;
      this.nome = '';
      this.cdr.detectChanges();
    }
  }

  async resetarUsuario() { //reseta o usuario atual
  await Preferences.remove({ key: 'usuario' });
  this.nomeSalvo = null;
}

  anuncio0 = {
    id: 0,
    titulo: 'Civic 2020',
    tipo: 'Carro',
    descricao: 'Sedan, econômico e confortável',
    preco: 'R$ 95.000',
    imagem: 'assets/img/civic.jpg'
  };

  anuncio1 = {
    id: 1,
    titulo: 'Yamaha MT-03',
    tipo: 'Moto',
    descricao: 'Esportiva e leve',
    preco: 'R$ 28.000',
    imagem: 'assets/img/moto.jpg'
  };

  anuncio2 = {
    id: 2,
    titulo: 'Cesna 172',
    tipo: 'Avião',
    descricao: 'Monomotor, 4 lugares',
    preco: 'R$ 1.200.000',
    imagem: 'assets/img/aviao.jpg'
  };

  anuncio3 = {
    id: 3,
    titulo: 'Lancha Focker 215',
    tipo: 'Lancha',
    descricao: 'Luxuosa e potente',
    preco: 'R$ 300.000',
    imagem: 'assets/img/lancha.jpg'
  };
}
