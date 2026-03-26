        const toggleBtn = document.getElementById('theme-toggle')
        const themeIcon = document.getElementById('theme-icon')
        const html = document.documentElement

        function loadTheme() {
            if (localStorage.theme === 'light') {
                html.classList.remove('dark')
                themeIcon.classList.remove('fa-moon')
                themeIcon.classList.add('fa-sun')
            } else {
                html.classList.add('dark')
                themeIcon.classList.remove('fa-sun')
                themeIcon.classList.add('fa-moon')
            }
        }

        toggleBtn.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark')
                localStorage.theme = 'light'
                themeIcon.classList.remove('fa-sun')
                themeIcon.classList.add('fa-moon')
            } else {
                html.classList.add('dark')
                localStorage.theme = 'dark'
                themeIcon.classList.remove('fa-moon')
                themeIcon.classList.add('fa-sun')
            }
        })

        // Mobile Menu
        const mobileBtn = document.getElementById('mobile-menu-btn')
        const mobileMenu = document.getElementById('mobile-menu')
        let isOpen = false

        mobileBtn.addEventListener('click', () => {
            isOpen = !isOpen
            if (isOpen) {
                mobileMenu.classList.remove('hidden')
                mobileBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
            } else {
                mobileMenu.classList.add('hidden')
                mobileBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
            }
        })

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden')
                mobileBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
                isOpen = false
            })
        })

        // تشغيل
        window.onload = loadTheme



        

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
   

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    

    nameError.textContent = "";
    emailError.textContent = "";
   


    var valid = true;
    if (name === "") {
        nameError.textContent = "please enter your name";
        valid = false;
    }
    else if (name.length < 3 || name.length > 15) {
        nameError.textContent = "Must be 3-15 characters";
        valid = false;
    }
    if (email === "") {
        emailError.textContent = "please enter your email";
        valid = false;
    }
    else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        emailError.textContent = "PLS Enter valid  email";
        valid = false;
    }
  

})







