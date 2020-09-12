class Box {
    //it is called as blueprint of an object
    //inside classes we expect to have function
    //since it is expected that the class will have function we dont need to write
    //need the keyword "function"---> ONLY INSIDE THE CLASS.

    //constructor is an inbuilt method: which is where we will be creating the properties.
    /*parameterized constructor: constructor function will have parameters in it
    this is also means when we create we object we need to give the value to these parameted

    */
    constructor(x, y, w, h) {
        //this is a keyword which points to the current calling object
        var options = {
            restitution: 1.0
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
        this.width = w;
        this.height = h;
    }

    display() {
        var pos = this.body.position;
        fill("White");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }





}