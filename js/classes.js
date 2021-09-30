class Game {
  constructor (){ //here we have the property
    this.currentTime= 0;
    this.car = null;
    this.obstacleArr = [];
  }
  startGame(){
    this.car = new Car();
    this.car.create();
    this.car.draw(); //I am calling a method outside the class, since I have made a connectin with it in the previous lines
    this.addEvenListeners(); //when creating the car, we will call this method

    setInterval(()=> { //we need to update all the obstacles
      //update timer
      this.currentTime++;
      //update obstacle position
      this.obstacleArr.forEach( (obstacle) => {
        obstacle.moveDown();
        obstacle.draw();

        //colission detention
        if (obstacle.y === 100){
          if (this.car.x < obstacle.x + obstacle.width && this.car.x + this.card.width > obstacle.x){
            alert ("GAME OVER");
          }
        } else if ( obstacle.y > 100){
          obstacle.remove();
          this.obstacleArr.shift();
        }
      });

      if (this.currentTime % 8 === 0){
        const newObstacle = new Obstacle ();
        newObstacle.create();//appending to the dom
        this.obstacleArr.push(newObstacle);
      }
     },200)
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

class Thing {
  constructor (){
    this.domElm = document.createElement("div");
    this.gameElm= document.getElementById("game");
  }
  create (){ //to create the car
    this.domElm.className = this.className; //I am assigning a class to the object div before its creating
    //no need to write the # because it already know it is an ID
    this.gameElm.appendChild(this.domElm);
  }

  remove (){
    this.gameElm.removeChild(this.domElm);
  }

  draw(){ //to draw it in the browser
    this.domElm.style.width = this.width + "%";
    this.domElm.style.height = this.height + "%";
    this.domElm.style.left = this.x + "%";
    this.domElm.style.top = this.y + "%";//here we are positioning the left right corner of the car
  }
}

class Car extends Thing{
  constructor (){
    super();//calls the constructor of the super class
    this.x = 50; //position center
    this.y = 100;
    this.width = 10;
    this.height = 15;
    this.className = "car";
    this.movementSpeed = 3;
  }
  moveLeft(){ //to see if I'm
  console.log("left was called")
  if (this.x - this.movementSpeed > 0){
    this.x -= this.movementSpeed;
  }
 }

 moveRight(){
   console.log ("right was called")
   if (this.x + this.width <100) {
    this.x += this.movementSpeed;
   }

 }
}

class Obstacle extends Thing{
  constructor (){
    super();
    this.className = "obstacle";
    this.x = 50; //position center
    this.y = 0;
    this.width = 20;
    this.height = 10;
  }

  moveDown(){
    this.y = this.y +5;
  }
}