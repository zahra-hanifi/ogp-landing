const links = document.querySelectorAll(".navbar-nav .nav-link");
links.forEach((value) => {
    /*if (window.location.href.includes(value.getAttribute('href'))) {
        console.log('active')
        value.classList.add('active')
    }*/
    value.addEventListener("click", (e) => {
        links.forEach((element) => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});

const navMain = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navMain.classList.add("bg-nav");
    } else {
        navMain.classList.remove("bg-nav");
    }
});

function slider(name) {
    const contents = document.querySelectorAll('.slider-container');
    const options = document.querySelectorAll('.option');
    const borderedElements = document.querySelectorAll('.bordered');
    const borderedElements2 = document.querySelectorAll('.bordered2');
    const titles = document.querySelectorAll('.slider-title');

    options.forEach((option) => {
        option.classList.remove('active');
        if (option.classList.contains(name)) {
            option.classList.add('active');
        }
    })

    borderedElements.forEach((el) => {
        el.classList.remove('active');
        if (el.classList.contains(name)) {
            el.classList.add('active');
        }
    })

    borderedElements2.forEach((el) => {
        el.classList.remove('active');
        if (el.classList.contains(name)) {
            el.classList.add('active');
        }
    })

    titles.forEach((el) => {
        el.classList.remove('active');
        if (el.classList.contains(name)) {
            el.classList.add('active');
        }
    })


    contents.forEach((content) => {
        content.classList.remove('active');
        if (content.classList.contains(name)) {
            content.classList.add('active');
        }
    })
}

/*
$("#submit-btn").click(function (e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name != "" && email != "" && message != "") {
        const Http = new XMLHttpRequest();
        const url = `https://api.cyruscoin.io/home/sendemailuser?email=${email}&message=${message}&name=${name}`;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            if (Http.responseText) {
                var name = $("#name").val("");
                var email = $("#email").val("");
                var message = $("#message").val("");
                $("#msg2").css("display", "block");
            }
            else {
                $("#msg3").css("display", "block");
            }
        };
    } else {
        $("#msg").css("display", "block");
    }
    e.preventDefault()
});
*/
