// alert("conected")




// Functionality based on..
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_number

function myFunction() {
    var
        species = document.getElementById("species").value,
        age = document.getElementById("number").value,
        fullName = document.getElementById("fullName").value,
        emailAddress = document.getElementById("emailAdress").value,
        petsName = document.getElementById("petsName").value,
        myFile = document.getElementById("myFile").value;

    if (isNaN(age) || age < 1 || age > 100) {
        text = "Please type in a valid age for your pet (can not be below one or above 100)";
        document.getElementById("errorMessage").innerHTML = text;

        return false; //stops the form from sending 
    } else if (species == "") {

        text = "Please specify your type of pet";
        document.getElementById("errorMessage").innerHTML = text;

        return false;


    }

    //fullname Error 
    else if (fullName == "") {

        text = "Please type in your full name";
        document.getElementById("errorMessage").innerHTML = text;

        return false;

    }

    //email address blank error 
    else if (emailAddress == "") {

        text = "Please type in your email address";
        document.getElementById("errorMessage").innerHTML = text;

        return false;

    } else if (myFile == "") {
        document.getElementById("errorMessage").innerHTML = " Please submit an image of your pet";

        return false;


    }

    //pets name blank error 
    else if (petsName == "") {

        text = "Please type in your pets name";
        document.getElementById("errorMessage").innerHTML = text;

        return false;


    }




};




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}