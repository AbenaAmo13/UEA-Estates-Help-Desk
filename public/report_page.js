function ReportFaultDisplay(){
    let savedTable =  $("table").html();
    //All the functions for the report page
    nav_bar_display_change();

    tableCardClick();
    reportMobileView();
        //getData();
   /*const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);*/

}

function nav_bar_display_change(){
    //Remove the current title
    $('#tab1').text("Home");
    $('#tab2').text("My reports");
    $('#tab3').text("Report Fault");
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

//Take form to JSON object


/*
function handleSubmit(event) {
    const form = document.getElementsByClassName('form');
    event.preventDefault();

    const data = formToJSON(form.elements);

    //const value = Object.fromEntries(data.entries());

    const json = JSON.stringify(data)

    console.log({ value });
    console.log(json);
}
*/




function saveFormData(){
    //Save the form data to local storage
    let input_report_title = document.getElementById("report_title").value;
    let report_description = document.getElementById("report_description").value;
    let building_name = document.getElementById("building_names").value;
    let room_details = document.getElementById("room_name").value
    let floor_name = document.getElementById("floor_name").value;
    let input_fault_type = document.getElementById("fault_type").value;


    let report_title = localStorage.setItem("report_title",input_report_title);
    let report_description_storage = localStorage.setItem("report_description",report_description)
    let building_name_storage = localStorage.setItem("building_name",building_name);
    let room_details_storage = localStorage.setItem("room_details",room_details);
    let floor_name_storage = localStorage.setItem("room_details",floor_name);
    let fault_type = localStorage.setItem("fault_type",input_fault_type)
}


function RenderMyReportsPage(){
    let assignedStatus = ['Assigned', 'Unassigned']
    let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let DaysOfTheMonth =['Offset', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th','27th', '28th', '29th', '30th', '31st']
    //Save local storage data.
    saveFormData();
    let randomID= Math.floor((Math.random() * 2000) + 1000);
    let assignedStatusID= Math.floor((Math.random() * 2));
    let monthsID = Math.floor(Math.random() * 12);
    let daysOfTheMonthsID = Math.floor(Math.random() * 31) + 1;
    let row = document.createElement('tr');
    //Add id column
    let ID_column = document.createElement('td');
    ID_column.textContent= randomID;



    let reportTitle = document.createElement('td');
    reportTitle.textContent = localStorage.getItem("report_title");
    let fault_type = document.createElement('td');
    fault_type.textContent = localStorage.getItem("fault_type");
    let status_column = document.createElement('td');
    status_column.textContent = assignedStatus[assignedStatusID]
    let date = new Date();
    let currentMonth = Months[date.getMonth()];
    let currentDay = DaysOfTheMonth[date.getDate()];
    let fullCurrentDate = currentDay + " " + currentMonth + " " + "2022"
    let currentDateColumn = document.createElement('td');
    currentDateColumn.textContent = fullCurrentDate
    let randomDate = Months[monthsID] + " " + DaysOfTheMonth[daysOfTheMonthsID] + " " + "2022";
    //let month = date.getMonth().toDateString();
    //let currentDate =date.toDateString().split(" ")[];
    console.log(randomDate);
    let column_elements = [ID_column, reportTitle, fault_type, status_column, currentDateColumn, randomDate]




    for(var i=0; i < 6; i++){

    }



   /* for(var i = 0; i <document.report_form.elements.length; i++){
        var fieldName = document.report_form.elements[i].name;
        var fieldValue = document.report_form.elements[i].value
        let column = document.createElement('td');
        if(fieldValue){
            column.textContent = fieldValue;
            row.appendChild(column);
        }
    }
    let table = document.getElementById("reports-table-id");
    table.appendChild(row)*/

    var navLinks = $('.nav-bar-link');
    //Saved tab2 html table at the start
    $('.tab_pages').hide()
    $('#tab2_page').show()
    navLinks.removeClass('active_tab')
   $('#tab2').addClass('active_tab')
    var tab = navLinks.attr('id')

}

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

 function appendTable(){
     $(document).ready(function () {

         // FETCHING DATA FROM JSON FILE
         $.getJSON("report.json",
             function (data) {
                 var student = '';

                 // ITERATING THROUGH OBJECTS
                 $.each(data, function (key, value) {

                     //CONSTRUCTION OF ROWS HAVING
                     // DATA FROM JSON OBJECT
                     student += '<tr>';
                     student += '<td>' +
                         value.GFGUserName + '</td>';

                     student += '<td>' +
                         value.NoOfProblems + '</td>';

                     student += '<td>' +
                         value.TotalScore + '</td>';

                     student += '<td>' +
                         value.Articles + '</td>';

                     student += '</tr>';
                 });

                 //INSERTING ROWS INTO TABLE
                 $('#table').append(student);
             });
     });
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
