const name = document.getElementById("name")

const email = document.getElementById("email")

const text = document.getElementById("text-reply")



function submitFunction() {

    if(name.value === " " || name.value === NaN || name.value === undefined){
        alert("enter a valid name");
        return false;
    }
    
    let atposition = email.value.indexOf("@");
    let dotposition = email.value.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.value.length) {
        alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
        return false;
    }

    if(text.value === " " || text.value === NaN || text.value === undefined){
        alert("enter a valid comment");
        return false;
    }
}


function about(){
    document.getElementById("about").scrollIntoView({behavior: 'smooth'});
}


function contact(){
    document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
}

function hire(){

    window.location.replace("https://drive.google.com/file/d/1OHahC1tB_QKRAyv1FxbBMHk1mGTOyAFG/view?usp=sharing");
}
