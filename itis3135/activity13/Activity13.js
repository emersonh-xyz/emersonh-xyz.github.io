$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "team.json", // Updated URL to point to the JSON file
        beforeSend: function () {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json", // Updated dataType to indicate JSON
        success: function (data) {
            $("#team").html("");
            $(data.teammembers).each(function () { // Updated selector to match JSON structure
                var jsonObj = this;
                $("#team").append("<h3>" + jsonObj.name + "</h3>" +
                    jsonObj.title + "<br>" +
                    jsonObj.bio + "<br>");
            });
        }
    });
});