chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.data) {
        console.log('Data received in content script:', message.data);
        fillforms(message.data);
    }
});
const fillforms = (data) =>{
    const selectors=[
        //name
        {
            name:"first_name_greenhouse",
            selector:'input[type="text"][id="first_name"], input[data-automation-id="legalNameSection_firstName"]',
            value:data.first_name,
        },
        {
            name:"last_name_greenhouse",
            selector:'input[type="text"][id="last_name"], input[data-automation-id="legalNameSection_lastName"]',
            value:data.last_name,
        },
        {
            name:"full_name_lever",
            selector:'input[name="name"]',
            value:data.first_name + " " + data.last_name,
        },
        //address
        {
            name:"address",
            selector:'input[data-automation-id="addressSection_addressLine1"]',
            value:data.address,
        },
        {
            name:"email",
            selector:'#email, input[type="email"], input[name="email"], input[name="job_application[email]"]',
            value:data.email
        },
        {
            name:"phone_number",
            selector:'#phone, input[name="phone"], input[name="job_application[phone]"], input[data-automation-id="phone-number"]',
            value:data.phone
        },
        // {
        //     name:"resume",
        //     selector:'input[name="resume"], input[type="file"], #resume-upload-input, button[aria-describedby="resume-allowable-file-types"]',
        //     value:data.resume_path
        // },
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
        if(element){
            console.log("the value of it: ",item.value);
            // element.value=item.value;
            if(item.name==="additional_information"){
                element.value=item.value;
                return;
            }
            element.setAttribute('value',item.value);
        }
    })
}