import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photo:any=["https://i.pinimg.com/originals/2c/64/7b/2c647b613affe94831f6141ca7f4a59a.jpg","https://img.wallpapersafari.com/desktop/1920/1080/15/53/P27MxY.jpg","https://wallpapercave.com/wp/wp3792715.png"]
  image:any;
  imageid:any;

  constructor() { }

  ngOnInit(): void {
    this.firstphoto()
    
  }
  firstphoto(){
    console.log("/////////////////////////",this.photo[0])
        this.image=this.photo[0]
        this.imageid=0
  }

  prev(){
    console.log("?????????????????????",this.imageid)
    if (this.imageid==0){

      this.image=this.photo[2]
      this.imageid=2
    }else{
      console.log("prevv in else",this.imageid)
    var a=this.imageid-1
    this.image=this.photo[a]
    this.imageid=a
    }

  }
  next(){
    console.log("!!!!!!!!!!!!!!!!!")
    if(this.imageid==2){
      this.image=this.photo[0]
      this.imageid=0
    }else{
      console.log("next():>>>",this.imageid)
    var a=this.imageid+1
    this.image=this.photo[this.imageid+1]
    this.imageid=a
    }


  }
}
