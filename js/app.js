function openLocation(evt, locName){
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    document.getElementById(locName).style.display = "block";
}

// Not working
// function myFunction(){
//     document.getElementById("loc-tabs").firstChild.style.borderTop = '1px solid #004c8c';
// }