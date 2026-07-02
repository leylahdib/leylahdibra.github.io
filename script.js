console.log("Website loaded successfully!");

const heading = document.querySelector("h1");

heading.addEventListener("click", function ()
{
  heading.textContent = "You clicked the title!";
  heading.style.color = "red";
});