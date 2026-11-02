document.querySelectorAll(".simple"). forEach(simple => {
    const items = simple.querySelectorAll(".simple-item");
    const dotsHtml = Array.from(items, () =>{
        return`<span class="simple-dots"></span>`;
    });
    
    simple.insertAdjacentHTML("beforeend", `
        <div class="simple-nav">
         ${dotsHtml.join("")}
        </div>
   `);
   const dots = simple.querySelectorAll(".simple-dots");

   dots.forEach((dot, i) =>{
    dot.addEventListener("click", () =>{
        //unselect all items
        items.forEach(item => item.classList.remove("simple-item--selected"));
        dots.forEach(dot => dot.classList.remove("simple-dots--selected"));

        items[i].classList.add("simple-item--selected");
        dot.classList.add("simple-dots--selected");
    });
   });

   //select first item on page
    if(items[0]) items[0].classList.add("simple-item--selected");
    if(dots[0])  dots[0].classList.add("simple-dots--selected");


    
});