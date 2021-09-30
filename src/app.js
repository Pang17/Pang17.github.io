
function submitForm() {
    console.log("Hello")
    const form = document.getElementsByTagName('contactForm')[0];
    const user_lname = document.getElementById('lname').value;
    const user_fname= document.getElementById('fname').value;
    const user_email= document.getElementById('email').value;
    const user_phone = document.getElementById('phone').value;
    const user_message = document.getElementById('msg').value;
    var params = {
        user_lname,
        user_fname,
        user_email,
        user_phone,
        user_message,
    }
    console.log(user_lname)
    console.log(user_fname)
    console.log(user_email)
    console.log(user_phone)
    console.log(user_message)

    var ready = true

    if (user_lname == "") {
        document.getElementById("lnameMsg").style.display = ""
        ready = false;
    } else {
        ready = true;
        document.getElementById("lnameMsg").style.display = "none"
    }

    if (user_fname == "") {
        document.getElementById("fnameMsg").style.display = ""
        ready = false;
    } else {
        ready = true;
        document.getElementById("fnameMsg").style.display = "none"
    }

    if (user_message == "") {
        document.getElementById("messageMsg").style.display = ""
        ready = false;
    } else {
        ready = true;
        document.getElementById("messageMsg").style.display = "none"
    }

    if (!validateEmail(user_email)) {
        document.getElementById("emailMsg").style.display = ""
        ready = false;
    } else {
        ready = true;
        document.getElementById("emailMsg").style.display = "none"
    }

    if (!validatePhone(user_phone)) {
        document.getElementById("phoneMsg").style.display = ""
        ready = false;
    } else {
        ready = true;
        document.getElementById("phoneMsg").style.display = "none"
    }


    if (ready) {
        emailjs.send('service_dhzqwce','template_77aagqa', params)
            .then(function(res) {
                console.log("success ", res.status);
            });
        document.getElementById("doneMsg").style.display = "";
    }

}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(phone)
}
