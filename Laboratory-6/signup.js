



/* First Name */

let first = document.getElementById("fname");
first.addEventListener("focusout", fnameChecker);

function fnameChecker() {
    let fname = document.getElementById('fname').value;
    let ftester = /\d/.test(fname);
    
    if (ftester == true || fname == "") {
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("fname").style.borderWidth = "1px";
        document.getElementById("invf").style.display = "block";
        return false;
        
    }

    else {
        document.getElementById("fname").style.borderColor = "green";
        document.getElementById("fname").style.borderWidth = "2px";
        document.getElementById("invf").style.display = "none";
        return true;
    }

    
}

/* Last Name */

let last = document.getElementById("lname");
last.addEventListener("focusout", lnameChecker);

function lnameChecker() {
    let lname = document.getElementById('lname').value;
    let ltester = /\d/.test(lname);
    
    if (ltester == true || lname == "") {
        document.getElementById("lname").style.borderColor = "red";
        document.getElementById("lname").style.borderWidth = "1px";
        document.getElementById("invl").style.display = "block";
        return false;
    }

    else {
        document.getElementById("lname").style.borderColor = "green";
        document.getElementById("lname").style.borderWidth = "2px";
        document.getElementById("invl").style.display = "none";
        return true;
        
    }

    
}

/* Middle Initial */

let mid = document.getElementById("midi");
mid.addEventListener("focusout", midiChecker);


function midiChecker() {
    let midi = document.getElementById('midi').value;
    let length = midi.length;
    let mtester = /\d/.test(midi);
    
    if (mtester == true || midi == "" || length > 1) {
        document.getElementById("midi").style.borderColor = "red";
        document.getElementById("midi").style.borderWidth = "1px";
        document.getElementById("invm").style.display = "block";
        return false;
    }

    else {
        document.getElementById("midi").style.borderColor = "green";
        document.getElementById("midi").style.borderWidth = "2px";
        document.getElementById("invm").style.display = "none";
        return true;
        
    }

    
}

/* Email Address */

let mail = document.getElementById("email");
mail.addEventListener("focusout", emailChecker);

function emailChecker(boolean) {
    let email = document.getElementById('email').value;
    let format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]+/; 
    let etester = format.test(email);
   
    if (etester == true || email.includes("@") == false) { 
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.borderWidth = "1px";
        document.getElementById("invalid").style.display = "block";
        return false;
        
    }

    else {
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("email").style.borderWidth = "2px";
        document.getElementById("invalid").style.display = "none";
        return true;
    }
}


/* Reset */

function resetAll() {
    document.getElementById('email').value = "";
    document.getElementById('midi').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('fname').value = "";

    document.getElementById("email").style.borderColor = "gray";
    document.getElementById("email").style.borderWidth = "1px";

    document.getElementById("midi").style.borderColor = "gray";
    document.getElementById("midi").style.borderWidth = "1px";

    document.getElementById("lname").style.borderColor = "gray";
    document.getElementById("lname").style.borderWidth = "1px";

    document.getElementById("fname").style.borderColor = "gray";
    document.getElementById("fname").style.borderWidth = "1px";

    document.getElementById("invalid").style.display = "none";
    document.getElementById("invl").style.display = "none";
    document.getElementById("invf").style.display = "none";
    document.getElementById("invm").style.display = "none";
    
}

/* Submit */

function submitBtn() {
    fnameChecker();
    lnameChecker();
    midiChecker();
    emailChecker();

    if (emailChecker() == true && midiChecker() == true 
    && lnameChecker() == true && fnameChecker() == true) {
       alert('Successfully Signed Up!');
    }
    else {
       alert('There is an Invalid Input');
    }
}


let reset = document.getElementById("btnres");
reset.onclick = function() {
    resetAll()
};

let submit = document.getElementById("btnsub");
submit.onclick = function() {
    submitBtn()
};