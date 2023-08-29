
function cursive() {
    var head1 = document.getElementById("text-1");
    head1.style.fontFamily = "Bell MT";
    
   
    
}


function serif() {
    var head2 = document.getElementById("text-1");
    head2.style.fontFamily = "Impact";
    
   
}

function sansSerif () {
    var head3 = document.getElementById("text-1");
    head3.style.fontFamily = "AMGDT";
    
   
}


function changeCol() {
    var col1 = document.getElementById("text-1");
    var col2 = document.getElementById("font-color").value;
    col1.style.fontFamily = "Black";
}

function changeCol () {
    const colSelect = document.getElementById("font-color").value;
    const colChange1 = document.getElementById("text-1");

    
    colChange1.style.color = colSelect;
   
}
