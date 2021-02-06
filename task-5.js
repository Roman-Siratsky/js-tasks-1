class Component {
    constructor(tag) {
        this.element = {};
        this.element.tag = tag;
        this.element.style = {};
        this.element.style.display = 'block';
    }

    hide() {
        this.element.style.display = 'none';
    }

    show() {
        this.element.style.display = 'block';
    }
}

class Box extends Component{
    constructor({ tag, size, color }){
        super(tag);
        this.width = size;
        this.height = size;
        this.background = color;
    }

    getProps() {
        console.log(`Element: ${this.element.tag}; Width: ${this.width}; Height: ${this.width}; Background: ${this.background}; Display: ${this.element.style.display};`);
    }  
}

const box1 = new Box({
    tag: '<div></div>',
    size: 100,
    color: 'green'
});
box1.hide();
box1.show();


box1.getProps();
