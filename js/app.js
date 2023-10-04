const menu = document.getElementById("menu");
const btn = document.getElementById("submit")
const appPsw = "qxdqhvfbkwokbdvl"

window.document.addEventListener("DOMContentLoaded", () =>{

    window.addEventListener("scroll", () =>{
        menu.classList.remove("fa-xmark")
        document.querySelector("header").classList.remove("toggle");
    })

    menu.addEventListener("click", (e)=>{
        menu.classList.toggle("fa-xmark")
        document.querySelector("header").classList.toggle("toggle");
    });

    btn.addEventListener("click", (e) =>{
        e.preventDefault()
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let objet = document.getElementById("objetMsg").value;
        let message = document.getElementById("message").value;
        let body =  "Name: " + name + "<br> Email: " + email + "<br> Phone: " + phone + "<br> Objet: " + objet + "<br> Message: " + message;

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "ab.cissokho87@gmail.com",
            Password : appPsw,
            To : 'ab.cissokho87@gmail.com',
            From : email,
            Subject : objet,
            Body : body
        }).then(
          message => alert(message)
        );
    })


});





