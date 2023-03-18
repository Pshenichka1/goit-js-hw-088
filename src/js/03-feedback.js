import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input [name="email"]');
const inputTextarea = document.querySelector('textarea [name="message"]');

textareaMessage();
let formData = {};

form.addEventListener('input', throttle(handleTextareaInput, 500));


function handleTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};
function textareaMessage() {
   const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedMessage) {
        inputEmail.value = savedMessage.email;
        inputTextarea.value = savedMessage.message;
    } 
    console.log("email:", inputEmail.value);
    console.log("message:", inputTextarea.value);
}
form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(e) {
    e.preventDefault();
    if (inputEmail.value === "" || inputTextarea.value === "") {
        return alert('Всі поля повинні бути заповнені');
    } localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
 };
