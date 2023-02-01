export class View{
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


    createElement(){
        if(this.tag){
            const element = document.createElement(this.tag);
            if(this.attribute && this.attributeContent){
                element.setAttribute(this.attribute, this.attributeContent);
            }
            if(this.content){
                // Hello World / <div><ul></ul></div> ;
                element.innerHTML = this.content;   
            }
            return element;
        }
        else{
            return null;
        }
    }
}
 