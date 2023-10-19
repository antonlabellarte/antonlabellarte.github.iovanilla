function closeSnippet(){
    $("#cardbody").hide();
}

////////////////////////////

function checkStatus() { 
    
    if (document.getElementById('thememode').checked == false) {

        document.getElementById('statustheme').innerHTML = " lightmode. ☀️";
        document.body.style.backgroundColor = "#31383F";
        document.body.style.color = "white";
        document.getElementById('thememode').style.backgroundColor = "white;";
        

    } else if (document.getElementById('thememode').checked == true) {
    
        document.getElementById('statustheme').innerHTML = " darkmode. 🌙";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById('thememode').style.backgroundColor = "black";
    }

}

function copyToClipboard() {
    // Get the text field
    // var copyText = "startToCode();";
  
    // // // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // // Copy the text inside the text field
    navigator.clipboard.writeText("startToCode();");
    
    // Alert the copied text
    alert("Copiato negli appunti! ");
  }

startToCode()