
function feedbackFormValidate() {
    const feedbackForm = document.getElementById("feedback-form");
    const firstName = feedbackForm.firstName.value;
    const lastName = feedbackForm.lastName.value;
    const email = feedbackForm.email.value;
    const phone = feedbackForm.phone.value;
    const everythingOk = true;

    if (!validateName(firstName))
    {
        alert("Error: Invalid first name.");
        everythingOk = false;
    }
    
    if (!validateName(lastName))
    {
        alert("Error: Invalid last name.");
        everythingOk = false;
    }
    
    if (!validatePhone(phone))
    {
        alert("Error: Invalid phone number.");
        everythingOk = false;
    }
    
    if (!validateEmail(email))
    {
        alert("Error: Invalid e-mail address.");
        everythingOk = false;
    }

    if(everythingOk){
        if(feedbackForm.reply.checked)
            alert("Warning: The email feature is currently not supported.");
        alert("All the information looks good.\nThank you!");
        return true;
    }
    else
        return false;
}
function validateName(name)
{   
    //Check if name has any digits
    if(/\d/.test(name)){
        return false;
    }
    var p = name.search(/^[-\w\s']+$/);
    if(p == 0)
        return true;
    
    else
        return false;

}
function validateEmail(address)
{
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0) 
        return true;
    
    else 
        return false;
    
}
function validatePhone(phone)
{
    var p1 = phone.search(/^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/);
    var p2 = phone.search(/^\d{3}[-\s]{0,1}\d{4}$/);
    if (p1 == 0 || p2 == 0)
        return true;
    else
        return false;
}
