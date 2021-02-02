const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('nav ul')
    const navLinks = document.querySelectorAll<HTMLElement>('nav li')

    // Toggle nav
    burger?.addEventListener('click', () => {
        nav?.classList.toggle('active')
        burger.classList.toggle('toggle')

        // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s`
            }
        })
    })
}

navSlide()