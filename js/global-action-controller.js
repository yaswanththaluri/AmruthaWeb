$(document).ready(function () {
    var navItems = document.getElementsByClassName("nav-item");
    var navCards = document.getElementsByClassName("nav-card");
    var socMedia = document.getElementsByClassName("soc-med");
    var mapPin = null;
    try{
        mapPin = document.getElementById("map-pin");
    }catch(err){mapPin=null};
    if(mapPin!==null){
        mapPin.addEventListener("click", function () {
            var url = "https://www.google.com/maps/place/Amrutha+College+of+Nursing+Pendurthi+Visakhapatnam/@17.820792,83.2028978,17z/data=!3m1!4b1!4m5!3m4!1s0x3a3967e103c7d57b:0x6552bc208296d53e!8m2!3d17.820792!4d83.2050865";

            window.open(url, '_blank');
        });
    }
    try{
        var glry = document.getElementById("glry_thumbnail");
        glry.addEventListener("mouseover", function () {
            document.getElementById("openGallery").style.display = "flex";
            console.log("hover");
        });
        glry.addEventListener("mouseout", function () {
            document.getElementById("openGallery").style.display = "none";
            console.log("hover");
        });
    }catch (e) {

    }
    var specificInstitute = getInstitute();
    var navToPage = function() {
        var selectdItem = this.getAttribute("nav-item");
        if(selectdItem === "home"){
            window.location.href='/AmruthaWeb/index.html';
        }
        else if(selectdItem === "placements") {
            window.location.href='/AmruthaWeb/Placements.html?ins='+specificInstitute;
        }
        else if(selectdItem === "facilities"){
            window.location.href='/AmruthaWeb/Facilities.html?ins='+specificInstitute;
        }
        else if(selectdItem === "courses"){
            window.location.href='/AmruthaWeb/Courses.html?ins='+specificInstitute;
        }
        else if(selectdItem === "edu-partners"){
            window.location.href='/AmruthaWeb/EduPartners.html';
        }
        else if(selectdItem === "discipline"){
            window.location.href='/AmruthaWeb/Discipline.html?ins='+specificInstitute;
        }
        else if(selectdItem === "department"){
            window.location.href='/AmruthaWeb/Departments.html?ins='+specificInstitute;
        }
        else if(selectdItem === "son") {
            window.location.href='/AmruthaWeb/home_schOfNursing.html?ins=son';
        }
        else if(selectdItem === "con") {
            window.location.href='/AmruthaWeb/home_clgOfNursing.html?ins=con';
        }
        else if(selectdItem === "about-us"){
            window.location.href='/AmruthaWeb/About.html';
        }
    };

    var navToSocMedia = function () {
        var selectdItem = this.getAttribute("soc-med");
        if(selectdItem === "facebook"){
            window.open("https://www.facebook.com/Info.aesvsp/", "_blank");
        }
        else if(selectdItem === "twitter"){
            window.open("https://www.twitter.com", "_blank");
        }
        else if(selectdItem === "insta"){
            window.open("https://instagram.com/amruthainstitutions?igshid=ul9nb6z6f92y", "_blank");
        }
        else if(selectdItem === "linkedin"){
            window.open("https:www.linkedin.com", "_blank");
        }
    };
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', navToPage, false);
    }

    for (var i = 0; i < navCards.length; i++) {
        navCards[i].addEventListener('click', navToPage, false);
    }

    for (var i = 0; i < socMedia.length; i++) {
        socMedia[i].addEventListener('click', navToSocMedia, false);
    }

    console.log(specificInstitute);
    var clgTag = document.getElementById("tag-name");

    if(specificInstitute === 'son'){
        clgTag.innerText = 'School of Nursing';
        try{
            var cr = document.getElementById("courseName");
            cr.innerText = 'GNM';
        }
        catch(err){};
    }
    else if(specificInstitute === 'con'){
        clgTag.innerText = 'College of Nursing';
        try{
            var cr = document.getElementById("courseName");
            cr.innerText = 'B.Sc[N] 4YDC';
        }
        catch(err){};
    }
    else
        clgTag.innerText = 'Educational Soceity';

    try{
        var gnmCourse = document.getElementById("gnm-course");
        var bscCourse = document.getElementById("bsc-course");
        if(specificInstitute === 'son')
            bscCourse.style.display = "none";
        else if(specificInstitute === 'con')
            gnmCourse.style.display = "none";
    }catch(err){}

    console.log('done');

    try{
        var mailValue = document.getElementById("mailTo");
        if(specificInstitute === 'son')
            mailValue.value = "Amrutha School of Nursing";
        else if(specificInstitute === 'con')
            mailValue.value = "Amrutha College of Nursing";
        else
            mailValue.value = "Amrutha Educational Soceity";
    }catch (err){}

    try{
        var navToSch = document.getElementById("navToSchOfNursing");
        navToSch.addEventListener("click", function(){
            window.location.href='/AmruthaWeb/home_schOfNursing.html?ins=son';
        });
        var navToClg = document.getElementById("navToClgOfNursing");
        navToClg.addEventListener("click", function(){
            window.location.href='/AmruthaWeb/home_clgOfNursing.html?ins=con';
        });
    }catch (err){}


    var home = document.getElementById("navbar-brand");
    home.addEventListener("click", function(){
        if(specificInstitute === "son") {
            window.location.href='home_schOfNursing.html?ins=son';
        }
        else if(specificInstitute === "con") {
            window.location.href='home_clgOfNursing.html?ins=con';
        }
    });

    try{
        if(specificInstitute === "son"){
            var calHead = document.getElementById("calender-header");
            var calData = document.getElementById("calender-data");
            calHead.style.display = "none";
            calData.style.display = "none";
        }
    }
    catch (err){}
});

function getInstitute(){
    var loc = window.location.href;
    console.log('called');
    var ins = loc.split('?');
    if(ins.length>1){
        var res = ins[1].split('=')[1];
        return res;
    }
    return '';
}

function navToGallery(){
    window.open('/AmruthaWeb/gallery.html', "_blank");
}

function sendMail(){
    
}