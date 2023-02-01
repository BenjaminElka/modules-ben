import {View} from './view.js';


export class Form {
    constructor(
        tag,
         attribute,
         attributeContent,
         content
    ){
        this.tag = tag;
        this.attribute = attribute;
        this.attributeContent = attributeContent;
        this.content = content;
    }

    appendElement(){
        const element = new View(this.tag , this.attribute , this.attributeContent , this.content).createElement();
        document.body.appendChild(element);
    }
}

