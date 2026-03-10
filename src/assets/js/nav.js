// add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
    });

    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');

        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }

    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
        }

    // set active nav link based on current page
    function setActiveNavLink() {
        // get current page path
        const currentPath = window.location.pathname;
        
        // get all navigation links
        const navLinks = document.querySelectorAll('#cs-navigation .cs-li-link');
        
        // remove cs-active class from all links
        navLinks.forEach(link => {
            link.classList.remove('cs-active');
        });
        
        // add cs-active class to the link that matches current path
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // handle root path
            if (currentPath === '/' && href === '/') {
                link.classList.add('cs-active');
            }
            // handle other paths - match the href with current path
            else if (href !== '/' && currentPath.startsWith(href)) {
                link.classList.add('cs-active');
            }
        });
        
        // handle dropdown parent links - if a dropdown child link is active, mark the parent as active too
        const dropDownLinks = document.querySelectorAll('#cs-navigation .cs-drop-link');
        dropDownLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // if this dropdown link matches current path
            if (currentPath === href || (href !== '/' && currentPath.startsWith(href))) {
                // find the parent dropdown and its parent link
                const parentDropdown = link.closest('.cs-dropdown');
                if (parentDropdown) {
                    const parentLink = parentDropdown.querySelector(':scope > .cs-li-link');
                    if (parentLink) {
                        parentLink.classList.add('cs-active');
                    }
                }
            }
        });
    }
    
    // run on page load
    setActiveNavLink();
                                