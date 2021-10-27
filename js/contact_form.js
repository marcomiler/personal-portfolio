//===================================== CONTACT FORM =========================
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    var nameForm = document.getElementById('message-name').value;
    var emailForm = document.getElementById('message-email').value;
    // var subjectForm = document.getElementById('message-subject').value;
    var messageForm = document.getElementById('message').value;

    console.log(nameForm);
    emailjs.send("service_x84xqkw","template_44mcrhm",{
            from_name: nameForm,
            to_name: emailForm,
            message: messageForm,
    });
    toastr.success("The message was sent successfully", "Thank you for contacting me!", options);
}

// User ID: user_nt53Dm0cZOQCCqve07ieD
// Access Token: 4ed751dea3b33432ec3780bfed90fa3c


var options = {
    "debug": false,
    "newestOnTop": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "showDuration": "400",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

    