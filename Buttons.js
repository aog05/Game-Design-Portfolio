export default class Buttons {
    constructor() {
        const menus = document.getElementsByClassName("section-wrapper");
        const page = document.getElementById("page");
        var pageRisen = false;

        const aboutMe = document.getElementById("about-me-button");
        aboutMe.addEventListener("click", function() {
            openMenu(0);
        });

        const accomplishments = document.getElementById("accomplishments-button");
        accomplishments.addEventListener("click", function() {
            openMenu(1);
        });

        const blender = document.getElementById("blender-button");
        blender.addEventListener("click", function() {
            openMenu(2);
        });

        const unity = document.getElementById("unity-button");
        unity.addEventListener("click", function() {
            openMenu(3);
        });

        const contact = document.getElementById("contact-button");
        contact.addEventListener("click", function() {
            openMenu(4);
        });
        
        const hide = document.getElementById("hide-button");
        hide.addEventListener("click", function() {
            if (pageRisen === true) {
                page.style.animation = "menuSlideDown 2s ease forwards";
                pageRisen = false;
            }

            document.body.style.overflowY = "hidden";
        });

        function openMenu(index) {
            for (let i = 0; i < menus.length; i++) {
                if (i != index) {
                    menus[i].style.opacity = 0;
                    menus[i].style.padding = 0;
                    menus[i].style.height = 0;
                }
                else {
                    menus[i].style.opacity = 1;
                    menus[i].style.padding = "30px 30px";
                    menus[i].style.height = "100%";
                }
            }

            if (pageRisen === false) {
                page.style.animation = "menuSlideUp 2s ease forwards";
                pageRisen = true;
            }

            document.body.style.overflowY = "visible";
        }

        // Set starting opacities
        document.body.style.overflowY = "hidden";
        for (let i = 0; i < menus.length; i++) {
            menus[i].style.opacity = 0;
            menus[i].style.padding = 0;
            menus[i].style.height = 0;
        }
    }
}