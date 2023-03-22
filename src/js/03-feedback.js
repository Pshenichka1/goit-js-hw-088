import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input [name="email"]');
const inputTextarea = document.querySelector('textarea [name="message"]');
let feedbackForm = {};
textareaMessage();

form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    formData.forEach((email, message) =>
        console.log('email: ${email.value}, message: ${message.value}'));
       
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
 };

form.addEventListener('input', throttle(handleTextareaInput, 500));

function handleTextareaInput(e) {
    feedbackForm[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm))
};
function textareaMessage() {
    let savedMessage = localStorage.getItem('feedbackForm');
    if (savedMessage) {
        savedMessage = JSON.parse(savedMessage);
        inputEmail.value = savedMessage.email;
        inputTextarea.value = savedMessage.message;
        
    } 
}


// form.addEventListener('submit', handleFormSubmit);
// function handleFormSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData(form);
//     formData.forEach((email, message) => console.log(email, message));
//     console.log("email:", inputEmail.value);
//     console.log("message:", inputTextarea.value);
   
//     e.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
//  };