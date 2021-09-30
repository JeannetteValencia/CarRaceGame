class Game {
  constructor (){
    this.currentTime= 0;
    this.car = null;
  }
  startGame(){
    this.car = new Car();
    this.car.create();
    this.car.draw(); //I am calling a method outside the class, since I have made a connectin with it in the previous lines
    this.addEvenListeners(); //when creating the car, we will call this method
  }

  addEvenListeners(){
    document.addEventListener("keydown",(event) =>{ //use arrow function so "this" refers to this class, not the document
      //read keycode left or right, the property Key can be useful
      if(event.key === "ArrowLeft") {
        this.car.moveLeft(); //I am calling the instance that
        this.car.draw();
      } else if (event.key === "ArrowRight") {
         this.car.moveRight();
         this.car.draw();
      }
    })
  }
}

class Car {
  constructor (){
    this.x = 50; //position center
    this.y = 100;
    this.width = 10;
    this.height = 15;
    this.domElm = document.createElement("div");
  }
  moveLeft(){ //to see if I'm
   console.log("left was called")
   this.x --;
  }

  moveRight(){
    console.log ("right was called")
   this.x ++;
  }

  create (){ //to create the car
    this.domElm.className = "car"; //I am assigning a class to the object div before its creating
    const gameElm= document.getElementById("game");//no need to write the # because it already know it is an ID
    gameElm.appendChild(this.domElm);
  }

  draw(){ //to draw it in the browser
    this.domElm.style.width = this.width + "%";
    this.domElm.style.height = this.height + "%";
    this.domElm.style.left = this.x + "%";
    this.domElm.style.top = this.y + "%";//here we are positioning the left right corner of the car
  }
}