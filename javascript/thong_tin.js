document.addEventListener("DOMContentLoaded", function() { 
    const scrollLinks = document.querySelectorAll(".scroll-link");

    scrollLinks.forEach(link => {
        link.addEventListener("click", function(obj) {
            scrollLinks.forEach(element => { element.classList.remove("active") });
            obj.target.classList.add("active");
            const targetId = this.getAttribute("name");
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const topOffset = targetElement.offsetTop;
                const scrollableSection = document.querySelector(".noi-dung-tab");
                if (scrollableSection) {
                    scrollableSection.scrollTo({
                        top: topOffset-13,
                        behavior: "smooth"
                    });
                }
            }
        })
    });
});