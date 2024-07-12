import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonBackButton, IonList, IonLabel, IonItem, IonImg, IonThumbnail, IonText, IonModal } from '@ionic/angular/standalone';
import { product } from 'src/app/data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonText, IonImg, IonItem, IonLabel, IonList, IonBackButton, IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonThumbnail, IonModal]
})
export class ProductsPage implements OnInit {

  public items: any[]=[];
  public itemModel: any= {};
  public showBarcode= false;
  public currency= "$";

  constructor() { }

  ngOnInit() {
    this.items= [...product];
  }

  getBarcodeData(item:any){
    this.itemModel= {...item};
    this.showBarcode= true;

    setTimeout(()=>{

    }, 500);
  }
  

}
