import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: String='default'
  constructor(private router:Router){ }
  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn("seller logged in");
          this.menuType='seller';

        }else{
          console.warn("seller not logged in");
          this.menuType='default';
        }

      }
      
    })
  }
  

}
