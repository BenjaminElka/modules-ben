import {Form} from './form.js';

const formEl = document.querySelector('form');
formEl.addEventListener('submit' , onFormSubmit);
function onFormSubmit(evt){
    evt.preventDefault();
    console.log('hello');
    const form = new Form(formEl.elements.tag.value,
        formEl.elements.attribute.value,
        formEl.elements.attributeContent.value,
        formEl.elements.content.value
        );
    form.appendElement();
}
