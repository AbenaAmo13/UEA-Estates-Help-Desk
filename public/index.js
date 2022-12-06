

$(document).ready(function() {
    //Show the report fault display at the start
    tabToggles();

    $('.account_circle').click(function(){
        console.log("something happened");
        $('.dropdown-content').toggleClass("show");

    });



    ReportFaultDisplay();
    openSideNavigation();
    closeSideNav();
    tabMobileToggles();

});

//Function to control tab toggles
function tabToggles(){
    //This code is to switch between the tabs
    $('.nav-bar-link:first').addClass('active_tab');
    $('.nav-bar-link:not(:first)').removeClass('active_tab');
    $('.tab_pages').hide();
    $('.tab_pages:first').show();

    $('.nav-bar-link').click(function(){
        var t = $(this).attr('id');
        //var page_title = this.textContent;
        if(!$(this).hasClass('active_tab')){ //this is the start of our condition
            $('.nav-bar-link').removeClass('active_tab');
            $(this).addClass('active_tab');
            //$('#page-title').text(page_title);
            $('.tab_pages').hide();
            $('#'+ t + '_page').fadeIn('slow');
        }
    });
}



function tabMobileToggles(){
    //This code is to switch between the tabs
    $('.sideNavLinks:first').addClass('active_tab');//Make report fault the active_tab
    $('.sideNavLinks:not(:first)').removeClass('active_tab');
    $('.tab_pages').hide();
    $('.tab_pages:first').show();

    $('.sideNavLinks').click(function(){
        var t = $(this).attr('id');
        var tabId = t.split('_')[0];
        console.log(tabId);
        if(!$(this).hasClass('active_tab') &&(t!=="close_sidenav_button")){ //this is the start of our condition
            $('.sideNavLinks').removeClass('active_tab');
            $(this).addClass('active_tab');
            $('.tab_pages').hide();
            //$('#'+ tabId+ '_page').fadeIn('slow');
            $('#'+ tabId+ '_page').show();
        }
    });
}
//Function to control toggle of side navigation bar
function openSideNavigation(){

    document.getElementById("menuButton").addEventListener("click", function (){
        document.getElementById("mobile_sideNav").style.width = "75%";
    });
}

//Function to control toggle of side navigation bar
function closeSideNav(){

    document.getElementById("close_sidenav_button").addEventListener("click", function (){
        document.getElementById("mobile_sideNav").style.width = "0%";
    });
}





/*
function appendMenu(x) {
    var mobileNavHeadings = returnMobileNavHeadingHTML();
    if (x.matches) {// If media query matches
        $("nav"  ).empty();
        $("nav"  ).append(mobileNavHeadings);
        tabToggles();
        mobileToggle();

    }else{
        var laptopNavHeadings = returnLaptopNavHeadings();
        $("nav"  ).empty();
        $("nav"  ).append(laptopNavHeadings);
        $("#page-title").removeAttr("style").hide();
        tabToggles();
    }
}
*/
function mobileToggle(){
    $('#menuButton').click(function(){
        var menu = $('.menu');
        if($(menu).hasClass('is_active')) {
            this.setAttribute('aria-expanded', 'false');
            $(menu).removeClass('is_active');
        }else{
            $(menu).addClass('is_active');
            this.setAttribute('aria-expanded', 'true');
        }

    });

}



function isMobileWidth() {

    console.log($('#mobile-indicator').is(':visible'));
    return $('#mobile-indicator').is(':visible');
}


/*
function returnMobileNavHeadingHTML(){
    var mobileNavHeadings = "<div class=\"navbar-headings\">\n" +
        "            <img  class=\"responsive logo\" src=\"images/uea_logo-removebg-preview.png\" alt=\"UEA logo\">\n" +
        "            <h1 id=\"page-title\">Home</h1>\n" +
        "            <button id=\"googletranslate\"  class=\"navbar-icon-buttons\">\n" +
        "                <span class=\"navbar-button-span\">Google translate</span>\n" +
        "                <i class=\"material-icons nav-bar\" alt=\"google translate icon\">g_translate</i>\n" +
        "            </button>\n" +
        "            <button id=\"menuButton\" aria-expanded=\"false\" aria-controls=\"menu\" class=\"navbar-icon-buttons\">\n" +
        "                <span class=\"navbar-button-span\">Menu</span>\n" +
        "                <i class=\"material-icons nav-bar\" alt=\"menu icon\">menu</i>\n" +
        "            </button>\n" +
        "        </div>\n" +
        "\n" +
        "        <ul class=\"menu\">\n" +
        "            <li><a class=\"nav-bar-link\" id=\"tab1\"> Home</a></li>\n" +
        "            <li><a class=\"nav-bar-link\" id=\"tab2\">My reports</a></li>\n" +
        "            <li> <a class=\"nav-bar-link\" id=\"tab3\">Report fault </a></li>\n" +
        "            <li><a class=\"nav-bar-link\" id=\"tab4\"> Help</a></li>\n" +
        "            <li><a class=\"nav-bar-link\" id=\"tab5\"> Allocate Report</a></li>\n" +
        "            <li  id=\"account-tab\">\n" +
        "               <a class=\"nav-bar-link\" id=\"tab6\">\n" +
        "                   <i class=\"material-icons nav-bar\" alt=\"account icon\">account_circle</i>\n" +
        "                   <span>Account Management</span>\n                  " +
        "               </a>\n" +
        "            </li>\n" +
        "        </ul>"

    return mobileNavHeadings;
}
*/

function returnLaptopNavHeadings(){
    var laptopNavHeadings = "  <img  class=\"responsive logo\" src=\"images/uea_logo-removebg-preview.png\" alt=\"UEA logo\">\n" +
        "            <h1 id=\"page-title\">Home</h1>\n" +
        "        <ul class=\"menu\">\n" +
        "            <li><a class=\"nav-bar-link\" id=\"tab1\"> Home</a></li>\n" +
        "            <li><a class=\"nav-bar-link\" id=\"tab2\">My reports</a></li>\n" +
        "            <li> <a class=\"nav-bar-link\" id=\"tab3\">Report Fault </a></li>\n" +
        "            <li><a class=\"nav-bar-link\" id=\"tab4\"> Information</a></li>\n" +
        "            <li><a class=\"nav-bar-link\" id=\"tab5\"> Allocate Report</a></li>\n" +
        "            <li>\n" +
        "                <a class=\"nav-bar-link\" id=\"tab6\">\n" +
        "                <span class=\"navbar-button-span\">Account Management</span>\n" +
        "                    <i class=\"material-icons nav-bar\" alt=\"google translate icon\">account_circle</i>\n" +
        "                </a>\n" +
        "            </li>\n" +
        "             <li>\n" +
        "                <a class=\"nav-bar-link\" id=\"tab7\">\n" +
        "                    <span class=\"navbar-button-span\">Google Translate</span>\n" +
        "                    <i class=\"material-icons nav-bar\" alt=\"google translate icon\">g_translate</i>\n" +
        "                </a>\n" +
        "            </li>"+
        "        </ul>"
    return laptopNavHeadings;
}

//var x = window.matchMedia("(max-width: 700px)")
//appendMenu(x) // Call listener function at run time
//x.addListener(appendMenu) // Attach listener function on state changes*/
function switchPageDisplay(){
    var chosenSelectedOption = document.getElementById("user_page_selector").value;
    switch(chosenSelectedOption){
        case "Allocate fault":
            //This will swtich the page elements
            AllocateFaultDisplay()
            break;
        case "Fix fault":
            FixFaultDisplay();
            break;
        case "Report fault":
            ReportFaultDisplay();

            break;

    }
}

function showMobileMenu(){
    console.log("clicked the menu bar")
}
