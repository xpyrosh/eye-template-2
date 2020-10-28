function openLocation(evt, locName){
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    document.getElementById(locName).style.display = "block";
}

// Not working
function myFunction(){
    // let x = document.getElementById("loc-tabs").firstChild;
    // console.log(x);
}