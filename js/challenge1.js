window.addEventListener("load", function() {
    let heading = document.querySelector("h1");
    heading.classList.add("heading");
    this.document.addEventListener("dblclick", function(){
        alert(Date());
    });
    let check = document.querySelector("#toggle")
    check.addEventListener("change", function(){
        let email = document.querySelector("#emailBox");
        if (check.checked){
            email.classList.remove("hidden")
        }
        else{
            email.classList.add("hidden")
        }
    });
});