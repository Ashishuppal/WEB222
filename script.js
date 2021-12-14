$("#myCarousel").carousel({
    interval: false
});


function ShowHideDiv() {
    var chkYes = document.getElementById("Hiring");
    dvtext.style.display = chkYes.checked ? "block" : "none";
}

function submitForm() {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signup.email.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)

}

