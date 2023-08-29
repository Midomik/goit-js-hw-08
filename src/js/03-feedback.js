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



const localInfo= JSON.parse(localStorage.getItem("feedback-form-state"));
console.log(localInfo);
const fillField = () =>{
   
//  console.log(localInfo);
        if(localInfo.email!=="null"){
            inputEl.value=localInfo.email;
            // console.log("input ok")
        } 
        if(localInfo.message!=="null"){
            textareaEl.value=localInfo.message;
            // console.log("area ok");
        } 
}



const formSubmit = (e) => {
    e.preventDefault();
    if (inputEl.value==="" || textareaEl.value==="") {
        return alert("Please, fill in all fields!!!");
       }
    const finalObject=JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(finalObject);
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}


fillField();

formEl.addEventListener("input", throttle(writeFeedbaack,500));
formEl.addEventListener("submit", formSubmit);