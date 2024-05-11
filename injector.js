chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.data) {
        console.log('Data received in content script:', message.data);
        fillforms(message.data);
    }
});
const fillforms = (data) =>{
    const selectors=[
        {
            name:"first_name_greenhouse",
            selector:'input[type="text"][id="first_name"]',
            value:data.first_name,
        },
        {
            name:"last_name_greenhouse",
            selector:'input[type="text"][id="last_name"]',
            value:data.last_name,
        },
        {
            name:"full_name_lever",
            selector:'input[name="name"]',
            value:data.first_name + " " + data.last_name,
        },
        {
            name:"email",
            selector:'#email, input[type="email"], input[name="email"], input[name="job_application[email]"]',
            value:data.email
        },
        {
            name:"phone_number",
            selector:'#phone, input[name="phone"], input[name="job_application[phone]"]',
            value:data.phone
        },
        {
            name:"linkedin",
            selector:'input[name="urls[LinkedIn]"], input[autocomplete="custom-question-linkedin-profile"]',
            value:data.linkedin
        },
        {   
            name:"github",
            selector:'input[name="urls[GitHub]"], input[autocomplete="custom-question-github-username"], input[autocomplete="custom-question-github-profile"], input[autocomplete="custom-question-github"]',
            value:data.github
        },
        {
            name:"website",
            selector:'input[name="urls[Portfolio]"], input[autocomplete="custom-question-website"]',
            value:data.website
        },
        {
            name:"additional_information",
            selector:'textarea[name="comments"], #additional-information',
            value:data.additional_information
        },
    ]
    console.log("filled form function call");
    selectors.forEach(item=>{
        const element = document.querySelector(item.selector);
        if(item.name=="github"){
            console.log("is the value",element);
        }
        if(element){
            element.value=item.value;
        }
    })
}