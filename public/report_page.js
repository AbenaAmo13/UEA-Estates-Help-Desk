function ReportFaultDisplay() {
    let tabIdMobile;

    $('.sideNavLinks').click(function () {
        let t = $(this).attr('id');
        let tabId = t.split('_')[0];
        tabIdMobile = tabId;
        switch(tabIdMobile){
            case "tab3":
                let expanded = false;
                expandMore(expanded);
                break;

        }

    });



    //Form handling
    getRandomDateMobile()


    let getReports = JSON.parse(localStorage.getItem("reports"));
    console.log(getReports);
    if (getReports) {
        getReports.forEach((report) => {
            //Append relevant report information the my reports table:
            let reportID = report[0];
            let title_report = report[1];
            let fault_type = report[6];
            let date_reported = report[9]
            let expected_resolve_date = report[10]
            let report_status = report[11]
            console.log(report_status)
            //console.log(title_report)
            RenderMyReportsPage(reportID, title_report, fault_type, report_status, date_reported, expected_resolve_date);
            RenderMyReportsMobileVersion(reportID, title_report, fault_type, date_reported, report_status);
        });
    }

    let report_form = document.getElementById("reports_form");
    let fileName = imageData();
    let reportArray = []
    let report = localStorage.getItem("reports")
        ? JSON.parse(localStorage.getItem("reports"))
        : [];
    report_form.addEventListener("submit", (e) => {
        e.preventDefault();
        //Give report an ID
        let randomID = Math.floor((Math.random() * 2000) + 1000);
        reportArray.push(randomID);
        for (let i = 0; i < document.report_form.elements.length; i++) {
            let fieldName = document.report_form.elements[i].name;
            let fieldValue = document.report_form.elements[i].value;
            if ((fieldName === "attachment_faults") && (fieldValue)) {
                fileName = uploadImageTextChanger(fieldValue);
                //console.log(fileName)
                                //reportItems.push(fileName)
            }
            reportArray.push(fieldValue)
        }
        let dateItems = getRandomDate();
        reportArray.push(dateItems[0]);
        reportArray.push(dateItems[1]);
        reportArray.push("Unassigned");
        report.push(reportArray);
        console.log(report)
        localStorage.setItem("reports", JSON.stringify(report));
        document.getElementById("form-submit-modal").style.display = "block";
    });

    $(".close").click(function () {
        document.getElementById("form-submit-modal").style.display = "none";
    })

    let savedTable = $("table").html();
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


function renderTableVersion2(reportItems) {

}

function closeForm() {

}

let ReportFormData = [];

/*This function */
function uploadImageTextChanger() {
    const fileInput = document.getElementById("attachment_faults");
    fileInput.addEventListener('change', () => {
        const fileName = fileInput.files[0].name;
        document.getElementById("file_name_id").textContent = " " + fileName;
    })
}

function nav_bar_display_change() {
    //Remove the current title
    $('#tab1').text("Home");
    $('#tab2').text("My reports");
    $('#tab3').text("Report Fault");
}


function saveFormData() {
    let attachment_faults = document.getElementById("attachment_faults");
    // Saves image to localStorage
    if (attachment_faults.files[0]) {
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


function getRandomDateMobile() {
    let dateItems = []
    let date = new Date()
    let Months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    let DaysOfTheMonth = ['Offset', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
    let daysOfTheMonthsID = Math.floor(Math.random() * 31) + 1;
    let monthsID = Math.floor(Math.random() * 12);
    let resolveDate = DaysOfTheMonth[daysOfTheMonthsID] + "/" + Months[monthsID] + "/" + "2023";
    let currentDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    dateItems = [currentDate, resolveDate];
    return dateItems
}

function RenderMyReportsMobileVersion(report_ID, title_of_report, type_of_fault, date_reported, status) {
    console.log(status)
    console.log("here");
    let reportList = document.createElement('li');
    reportList.classList.add("mobile_reported_list");
    let reportLink = document.createElement('a');
    reportLink.classList.add("mobile_reported_links");
    let report_title = document.createElement('h3');
    report_title.textContent = title_of_report + " ";
    console.log(title_of_report.length)
    if (title_of_report.length > 20) {
        //Increasing spaceItems
        report_title.classList.add("space_items_mini");
    }
    let reportId = document.createElement('h3');
    reportId.textContent = "ID-" + report_ID;
    let fault_type = document.createElement('p');
    fault_type.textContent = "Fault type: " + type_of_fault + " ";
    let reported_date = document.createElement("p");
    reported_date.textContent = "Date reported: " + date_reported;
    let assignment_status = document.createElement("p");
    assignment_status.classList.add("report_status");
    assignment_status.textContent = status;
    console.log(assignment_status)
    let reported_link_items = [report_title, reportId, fault_type, reported_date, assignment_status];
    //Append to the a tab.
    for (let i = 0; i < reported_link_items.length; i++) {
        reportLink.append(reported_link_items[i]);
        console.log(reportLink)
    }
    //Append the a to the list;
    reportList.appendChild(reportLink);
    //console.log(reportLink)
    //Append the list to the entire ul
    let entireList = document.getElementById("reported_list");
    if (reportList) {
        entireList.appendChild(reportList);
    }
}


function getRandomDate() {
    let date_items = [];
    let monthsID = Math.floor(Math.random() * 12);
    let daysOfTheMonthsID = Math.floor(Math.random() * 31) + 1;
    let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let DaysOfTheMonth = ['Offset', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st']
    let randomDate = DaysOfTheMonth[daysOfTheMonthsID] + " " + Months[monthsID] + " " + "2023";
    let date = new Date();
    let currentMonth = Months[date.getMonth()];
    let currentDay = DaysOfTheMonth[date.getDate()];
    let fullCurrentDate = currentDay + " " + currentMonth + " " + "2022"
    date_items = [fullCurrentDate, randomDate]
    return date_items;
}

function getTodayDate() {


}


function RenderMyReportsPage(report_id, title_of_report, type_of_fault, report_status, date_reported, expected_resolve_date) {
    //Set arrays for items for the table
    let row = document.createElement('tr');
    //Add id column
    let ID_column = document.createElement('td');
    ID_column.textContent = report_id;
    let reportTitle = document.createElement('td');
    reportTitle.textContent = title_of_report;
    let fault_type = document.createElement('td');
    fault_type.textContent = type_of_fault;
    let status_column = document.createElement('td');
    status_column.textContent = report_status
    let currentDateColumn = document.createElement('td');
    currentDateColumn.textContent = date_reported
    let randomDateColumn = document.createElement("td");
    randomDateColumn.textContent = expected_resolve_date;
    let column_elements = [ID_column, reportTitle, fault_type, status_column, currentDateColumn, randomDateColumn]
    //Append column information to the row
    for (let i = 0; i < 6; i++) {
        console.log(column_elements[i]);
        row.appendChild(column_elements[i]);
    }
    let table_body = document.getElementById("reports_table_id_body");
    table_body.appendChild(row);

}


function expandMore(expanded) {

    $('.expand_buttons').click(function () {
        let t = $(this).attr('id');
        let progress_details = '#'+t + '_info';
        console.log(progress_details);
        let icon_name = "#"+t + "_expand"
        if(!expanded){
            $(progress_details).removeClass("hide_details");
            $(progress_details).addClass("drop_down_progress");
            $(icon_name).textContent = "expand_less"
            expanded = true;
        }else{
            $(progress_details).removeClass("drop_down_progress");
            $(progress_details).addClass("hide_details");
            $(icon_name).textContent = "expand_more"
            expanded = false;

        }

    })




/*
    let expand_class = document.getElementsByClassName("expand_buttons").id;
    //let expand_more_button = document.getElementById("id_1203_expand_more");
    let expand_div_name_id = expand_class + "_progress_details";
    let icon = expand_class + "_expand_more_icon"
    let progress_detail = document.getElementById(expand_div_name_id);
    expand_class.addEventListener("click", (e) => {
        if (!expanded) {
            alert("something is clicked");
            //Expand the card
            //let progress_detail = document.getElementById("id_1203_progress_details");
            progress_detail.classList.remove("hide_details");
            progress_detail.classList.add("drop_down_progress");

            let expand_more_icon = document.getElementById(icon).innerText = "expand_less"
            expanded = true
        } else {
            alert("something is clicked again");
            //Make the card small
            //let progress_detail = document.getElementById("id_1203_progress_details");
            progress_detail.classList.remove("drop_down_progress");
            progress_detail.classList.add("hide_details");
            let expand_more_icon = document.getElementById(icon).innerText = "expand_more"
            expanded = false;

        }
    })
*/

}

/*
        var navLinks = $('.nav-bar-link')
        //Saved tab2 html table at the start
        $('.tab_pages').hide()
        $('#tab2_page').show()
        navLinks.removeClass('active_tab')
       $('#tab2').addClass('active_tab')*/


function renderCardsForMobile() {
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
    if (attachment_faults) {
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


function reportMobileView() {
    if (isMobileWidth()) {
        let report_table = $('.table_class');
        /*  report_table.empty();
          $('.table_class').removeClass('table_class').addClass('fault-report-cards')
          $('.input_stylings').remove();

          //$('.fault-report-cards').append(pagination)
      }else{
          let report_cards_list =  $('.table_class');
      }*/
    }
}


function isMobileWidth() {
    console.log($('#mobile-indicator').is(':visible'))
    return $('#mobile-indicator').is(':visible')
}


