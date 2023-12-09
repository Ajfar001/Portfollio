
var typed=new Typed(".text",{
 strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    typeSpeed: 100,
    BackSpeed: 100,
    backDelay: 1000,
    loop: true
})
document.getElementById("redirectButton").onclick = function() {
    // Replace 'newpage.html' with the URL of the page you want to redirect to
    window.location.href = 'newpage.html';
};
