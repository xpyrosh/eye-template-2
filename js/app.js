function openLocation(evt, locName){
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    
    // get all tablink elements and remove current class state
    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove('current');
    }
    

    // tablinks.forEach(element => {
    //     console.log(element);
    //     element.classList.remove('current');
    // });

    document.getElementById(locName).style.display = "block";
    // console.log(evt.currentTarget.classList);
    evt.currentTarget.classList.add("current");

    evt.preventDefault();
}