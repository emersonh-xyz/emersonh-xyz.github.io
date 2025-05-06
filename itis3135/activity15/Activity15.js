$(document).ready(function () {
    // Fetch JSON data
    $.getJSON("facultyList.json", function (data) {
        var facultyDiv = $("#faculty");

        // Loop through each faculty member
        $.each(data.facultymembers, function (index, faculty) {
            // Create elements for the professor's information
            var img = $("<img>").attr("src", faculty.image);
            var fullName = $("<h2>").text(faculty.full_name);
            var department = $("<h3>").text(faculty.department);
            var bio = $("<p>").text(faculty.bio);

            // Append the elements to the facultyDiv
            facultyDiv.append(img, fullName, department, bio);
        });
    });
});