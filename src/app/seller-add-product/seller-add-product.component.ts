import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage:string | undefined;
  
  constructor(private product:ProductService){ }
  ngOnInit(): void {

  }
  addProducts(data:product){
    this.product.addProduct(data).subscribe((result)=>{
      console.warn("result",result);
      if(result){
        this.addProductMessage="Product is added successfully"
      }
      setTimeout(() =>(this.addProductMessage=undefined), 3000);
        
    });

  }

}
