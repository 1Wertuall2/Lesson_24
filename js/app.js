(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
    "use strict";
    function scrollPage() {
        window.scrollTo({
            top: 100,
            left: 0,
            behavior: "smooth"
        });
    }
    setTimeout(scrollPage, 1e3);
    const itemOneElement = document.querySelector(".header__title");
    const itemTwoElement = document.querySelector(".arrays__image");
    const itemThreeElement = document.querySelector(".scroll__container");
    const itemOneCoords = itemOneElement.getBoundingClientRect();
    console.log(itemOneCoords);
    const itemTwoCoords = itemTwoElement.getBoundingClientRect();
    console.log(itemTwoCoords);
    const itemThreeCoords = itemThreeElement.getBoundingClientRect();
    console.log(itemThreeCoords);
})();