
function ReportFaultDisplay(){
    //Form handling:


    const getReports = JSON.parse(localStorage.getItem("reports"));
    console.log(getReports);
    if(getReports){
        getReports.forEach((report) => {
        //Append relevant report information the my reports table:
            let title_report = report[0];
            let fault_type = report[5];
            console.log(title_report)
      RenderMyReportsPage(title_report, fault_type);
        });
    }

    let report_form = document.getElementById("reports_form");
    let fileName = imageData();
    let reportArray=[]
    let report = localStorage.getItem("reports")
        ? JSON.parse(localStorage.getItem("reports"))
        : [];
    report_form.addEventListener("submit", (e) => {
        e.preventDefault();
        for(let i= 0; i<document.report_form.elements.length; i++){
            let fieldName = document.report_form.elements[i].name;
            let fieldValue = document.report_form.elements[i].value;
            if((fieldName==="attachment_faults") && (fieldValue)){
                fileName = uploadImageTextChanger(fieldValue);
                console.log(fileName)
;                //reportItems.push(fileName)

            }else if(fieldValue){
                reportArray.push(fieldValue)
            }
        }
        report.push(reportArray)
        localStorage.setItem("reports", JSON.stringify(report));
        document.getElementById("form-submit-modal").style.display="block";
    });

    $(".close").click(function (){
        document.getElementById("form-submit-modal").style.display="none";
    })

    let savedTable =  $("table").html();
    let report_submits_arrays = [];
    //All the functions for the report page
    //nav_bar_display_change();


    tableCardClick();
    reportMobileView();
    uploadImageTextChanger();
        //getData();
   /*const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);*/


}


function renderTableVersion2(reportItems){

}

function closeForm(){

}

let ReportFormData=[];
/*This function */
function uploadImageTextChanger(){
 const fileInput = document.getElementById("attachment_faults");
    fileInput.addEventListener('change' , () => {
        const fileName = fileInput.files[0].name;
        document.getElementById("file_name_id").textContent = " "+ fileName;
    })
}

function nav_bar_display_change(){
    //Remove the current title
    $('#tab1').text("Home");
    $('#tab2').text("My reports");
    $('#tab3').text("Report Fault");
}



function saveFormData(){
    let attachment_faults =  document.getElementById("attachment_faults");
    // Saves image to localStorage
    if(attachment_faults.files[0]){
        const file = attachment_faults.files[0];
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener('load', () => {
            const url = fr.result
            let image_data = localStorage.setItem('image', url.toString());
        })
    }

/*
            //To get image from local storage: (Will use later)
            const url = localStorage.getItem('image');
            // Get data URL from localStorage
                const img = new Image();
                img.src = url;
                document.body.appendChild(img);
            // Set URL as src of image and append to DOM

            //console.log(localStorage.getItem('image'));

        });

 */
    }








function RenderMyReportsPage(title_of_report, type_of_fault) {
    //Set arrays for items for the table
    let assignedStatus = ['Assigned', 'Unassigned']
    let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let DaysOfTheMonth = ['Offset', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st']
    //Save local storage data.
    saveFormData();

    let assignedStatusID = Math.floor((Math.random() * 2));
    let monthsID = Math.floor(Math.random() * 12);
    let daysOfTheMonthsID = Math.floor(Math.random() * 31) + 1;
    let row = document.createElement('tr');
    //Add id column
    let randomID = Math.floor((Math.random() * 2000) + 1000);
    let ID_column = document.createElement('td');
    ID_column.textContent = "#" + randomID;
    let reportTitle = document.createElement('td');
    reportTitle.textContent = title_of_report;
    console.log(reportTitle);
    let fault_type = document.createElement('td');
    fault_type.textContent = type_of_fault;
    let status_column = document.createElement('td');
    status_column.textContent = assignedStatus[assignedStatusID]
    let date = new Date();
    let currentMonth = Months[date.getMonth()];
    let currentDay = DaysOfTheMonth[date.getDate()];
    let fullCurrentDate = currentDay + " " + currentMonth + " " + "2022"
    let currentDateColumn = document.createElement('td');
    currentDateColumn.textContent = fullCurrentDate
    let randomDate = DaysOfTheMonth[daysOfTheMonthsID] + " " + Months[monthsID] + " " + "2022";
    let randomDateColumn = document.createElement("td");
    randomDateColumn.textContent = randomDate;
    let column_elements = [ID_column, reportTitle, fault_type, status_column, currentDateColumn, randomDateColumn]

    //Append column information to the row
    for (let i = 0; i < 6; i++) {
        console.log(column_elements[i]);
        row.appendChild(column_elements[i]);
    }

    let table_body = document.getElementById("reports_table_id_body");
    table_body.appendChild(row);


/*
        var navLinks = $('.nav-bar-link')
        //Saved tab2 html table at the start
        $('.tab_pages').hide()
        $('#tab2_page').show()
        navLinks.removeClass('active_tab')
       $('#tab2').addClass('active_tab')*/
}
function closedModal() {
    let closed_button = document.getElementsByClassName("close")[0];
    let modal = document.getElementById("form-submit-modal");

    closed_button.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
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



function imageData(fieldValue) {
    let attachment_faults = document.getElementById("attachment_faults");
    if(attachment_faults){
        if (attachment_faults.files[0]) {
            const file = attachment_faults.files[0];
            const fr = new FileReader();
            fr.readAsDataURL(file);
            fr.addEventListener('load', () => {
                const url = fr.result
                const fileName = url.toString();
                console.log(fileName);

                let image_data = localStorage.setItem('image', url.toString());
                /*
                To get image from local storage: (Will use later)
                const url = localStorage.getItem('image');
                // Get data URL from localStorage
                    const img = new Image();
                    img.src = url;
                    document.body.appendChild(img);
                // Set URL as src of image and append to DOM
                 */
                //console.log(localStorage.getItem('image'));
                return fileName;

            });

        }
    }

}





 function reportMobileView(){
    if(isMobileWidth()){
        let report_table =  $('.table_class');
        report_table.empty();
        $('.table_class').removeClass('table_class').addClass('fault-report-cards')
        $('.input_stylings').remove();

        //$('.fault-report-cards').append(pagination)
    }else{
        let report_cards_list =  $('.table_class');
    }
 }



function isMobileWidth(){
    console.log($('#mobile-indicator').is(':visible'))
    return $('#mobile-indicator').is(':visible')
 }


