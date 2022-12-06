function ReportFaultDisplay(){
    let savedTable =  $("table").html();
    //All the functions for the report page
    nav_bar_display_change();
    tab1_home_display();

    tableCardClick();
    reportMobileView();
        //getData();

}

function nav_bar_display_change(){
    //Remove the current title
    $('#tab1').text("Home");
    $('#tab2').text("My reports");
    $('#tab3').text("Report Fault");
}

function tab1_home_display(){
    $('#tab1_card_button').text("Report a fault");
    $("#tab1_card_image").attr("src","images/report_image_4.png");

    $('#tab2_card_button').text("My reported faults");
    $("#tab2_card_image").attr("src","images/my_reports.png");

    $('#tab3_card_button').text("Relevant Information");
    $("#tab3_card_image").attr("src","images/info.png");
}

function tab2_reportform_display() {
    $('#tab3_page').empty();
}
/*
function report_page_cards_onClick(){
    $(".card-list-item").click(function(){
        var card_id = $(this).attr('id');
        if (card_id.includes("1")){
            if(!$('#tab3').hasClass('active_tab')){ //this is the start of our condition
                $('.nav-bar-link').removeClass('active_tab');
                $('#tab3').addClass('active_tab');
                $('.tab_pages').hide();
                $('#tab3_page').fadeIn('slow');
            }
        }else
            if (card_id.includes("tab2_card_option")){
            if(!$('#tab2').hasClass('active_tab')){ //this is the start of our condition
                $('.nav-bar-link').removeClass('active_tab');
                $('#tab2').addClass('active_tab');
                $('.tab_pages').hide();
                $('#tab2_page').fadeIn('slow');
            }
        }
            else
            if (card_id.includes("3")) {
                if (!$('#tab4').hasClass('active_tab')) { //this is the start of our condition
                    $('.nav-bar-link').removeClass('active_tab');
                    $('#tab4').addClass('active_tab');
                    $('.tab_pages').hide();
                    $('#tab4_page').fadeIn('slow');
                }
            }
    });
}
*/

function tableCardClick() {
    $("tr").click(function () {
        let inSideReport = true;
        let savedTable = $("table").html();
        let splittedInformation = $(this.textContent.split(/\r?\n/));
        let incident_number = splittedInformation[1];
        let report_title = splittedInformation[2];
        let fault_type = splittedInformation[3];
        let status = splittedInformation[4];
        let date_reported = splittedInformation[5];
        let expected_resolve_date = splittedInformation[6]
        console.log(report_title);


    });
}
/*
function submitFormRedirect{

}

*/


//Initialize the get request from the client side.
//Whenever the user loads the page, you have to make the request.


/* function getData(){
       fetch('/getData', {
           method: 'get',
           headers: {
               'Accept': 'application/json, text/plain, *!/!*',
                'Content-Type': 'application/json'
            },
            }).then(res => res.json()) //res.json decodes the json file.
           .then(res => {
               newTableRowToAppend()

           //document.getElementById("information").innerText = res.report_title
             });
 }*/

function submitFormAction(){
    var table = document.getElementById("myTable");
    alert("Form has been submitted");
    let report_title = $('#report_title').val();
    let report_description = $('#report_description').val();
    let building_name = $('#building_name').val();
    let room_name = $('#room_name').val();
    let fault_type = $('#fault_type').val();
    let status = 'Unassigned';
    const date = new Date();

    let row = document.createElement("tr");
    let column_report_title = document.createElement("td").setAttribute("class", "report_title");
    let column_report_description = document.createElement("td").setAttribute("class", "report_description");
    let column_building_name = document.createElement("td").setAttribute("class", "building_name");
    let column_room_name = document.createElement("td").setAttribute("class", "room_name ");


    column.textContent =  report_title;
    c






       console.log(report_title);
}

 function newTableRowToAppend(report_title, fault_type, status, date_reported, expected_resolve_date){
var row_to_append ="<tr>\n" +
    "                <td class=\"report_id\">1650</td>\n" +
    "                <td class=\"report_title\">Broken door</td>\n" +
    "                <td class=\"category_type\">Other</td>\n" +
    "                <td class=\"status\">Unassigned</td>\n" +
    "                <td class=\"reported_date\">18th December 2022</td>\n" +
    "                <td class=\"expected_date\">20th December 2022</td>\n" +
    "            </tr>"

     document.get


 }

 function reportMobileView(){
    if(isMobileWidth()){
        $('.table_class').empty();
        $('.table_class')
        $('.input_stylings').remove();


    }
 }


 //
 function reportViewHTML(){
        var headings = " <select>\n" +
            "            <option>Open Tickets</option>\n" +
            "            <option>Closed Tickets</option>\n" +
            "        </select>\n" +
            "\n" +
            "        <input type=\"text\" placeholder=\"Search reports\" class=\"search-bar\">"

 }

function isMobileWidth() {

    console.log($('#mobile-indicator').is(':visible'));
    return $('#mobile-indicator').is(':visible');
}
 //getData()
