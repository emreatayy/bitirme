

function anmt() {
    var lbl1 = document.getElementById("lbl-1");
    var lbl2 = document.getElementById("lbl-2");
    var myDiv = document.getElementById("myDiv");
    var username = document.getElementById("username").value;

    myDiv.addEventListener("focusin", (event) => {
        lbl1.style.display = "none";
        lbl2.style.display = "inline";
    })
    myDiv.addEventListener("focusout", (event) => {
        lbl2.style.display = "none";
        if (username =="") {
            lbl1.style.display = "inline";
        }
        setTimeout(3000);
        if (username !="" || username == null) {
            lbl1.style.display = "none";
        }
    })
}

 /* 
 function anmt() {
    var lbl1 = document.getElementById("lbl-1");
    var lbl2 = document.getElementById("lbl-2");
    var username = document.getElementById("username").value;
    lbl1.style.display = "none";
    lbl2.style.display = "inline";
}

function anmtOut() {
    var lbl1 = document.getElementById("lbl-1");
    var lbl2 = document.getElementById("lbl-2");
    var username = document.getElementById("username").value;
    lbl2.style.display = "none";

    if(username !=""){
        lbl1.style.display = "none";
    }
    if(username =="" || username ==null){
        lbl1.style.display = "inline";
    }
}
 
 */