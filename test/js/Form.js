class Form {

    constructor() {
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton('Play');

    }

    display(){
        this.title.html("Game");
        this.title.position(displayWidth/2 - 50, 0);

        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
    }

}