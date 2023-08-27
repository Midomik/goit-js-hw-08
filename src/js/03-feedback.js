import throttle from 'lodash.throttle';


const formEl = document.querySelector(".feedback-form");
const inputEl = formEl.querySelector("input");
const textareaEl = formEl.querySelector("textarea");
const objectInfo={};




const writeFeedbaack = () => {
    objectInfo.email=inputEl.value;
    objectInfo.message=textareaEl.value;
    // console.log(objectInfo);
    localStorage.setItem("feedback-form-state", JSON.stringify(objectInfo))
}
 
const fillField = (lS) =>{
   const localInfo = JSON.parse(lS.getItem("feedback-form-state"));
        if(localInfo.email.trim()){
            inputEl.value=localInfo.email;
            // console.log("input ok")
        } 
        if(localInfo.message.trim()){
            textareaEl.value=localInfo.message;
            // console.log("area ok");
        } 
}

const formSubmit = (e) => {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}


fillField(localStorage);

formEl.addEventListener("input", throttle(writeFeedbaack,500));
formEl.addEventListener("submit", formSubmit);