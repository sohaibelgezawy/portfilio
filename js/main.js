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

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

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

window.onload = loadTheme

// Mobile Menu
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
