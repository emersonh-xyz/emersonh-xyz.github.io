$(document).ready(function () {
    $('nav#nav_list ul li a').click(function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Get the title attribute of the clicked link
        var linkTitle = $(this).attr('title');

        // Build the path and name of the JSON file to be retrieved
        var jsonFile = 'json_files/' + linkTitle + '.json';

        // Ajax request to retrieve the JSON data
        $.ajax({
            url: jsonFile,
            dataType: 'json',
            success: function (data) {
                // Retrieve the first speaker from the JSON data
                var speakerData = data.speakers[0];

                // Create HTML elements to display the speaker data
                var speakerHTML = '<h1>' + speakerData.title + '</h1>' +
                    '<h2>' + speakerData.month + '</h2>' +
                    '<h3>' + speakerData.speaker + '</h3>' +
                    '<img src="' + speakerData.image + '" alt="' + speakerData.alt + '">' +
                    '<p>' + speakerData.text + '</p>';

                // Replace the content of the main element with the speakerHTML
                $('main').html(speakerHTML);
            },
            error: function () {
                // Handle error case
                console.log('Error loading JSON data.');
            }
        });
    });
});
