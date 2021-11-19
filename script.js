const acc = document.getElementsByClassName("accordion");

for(let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    const para = this.nextElementSibling;

    if(para.style.display === "block") {
      para.style.display = "none";
      this.setAttribute("aria-expanded", "false");
    } else {
      para.style.display = "block";
      this.setAttribute("aria-expanded", "true");
    }
  })
}
