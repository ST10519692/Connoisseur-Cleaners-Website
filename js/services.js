
const accordionHeaders = document.querySelectorAll(".accordion-header");
const allContent = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((header) =>{
    header.addEventListener("click",() => {
        const accordionItem = header.parentElement; 
        const accordionContent = accordionItem.querySelector(".accordion-content");
        //To close other accordions
        allContent.forEach((content) => {
            if(content !== accordionContent) {
                content.classList.remove("active");
                content.style.maxHeight = "0";
            }
        });
      //To toggle the current one
        accordionContent.classList.toggle("active");

        if (accordionContent.classList.contains("active")) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight +"px";
        } else{
            accordionContent.style.maxHeight = "0";
        }
    });
});