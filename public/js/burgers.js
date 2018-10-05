// add burger to database from create form
$(".create-form").on("submit", function (event) {
    event.preventDefault();

    // throw the new burger request into a variable
    var requestBurger = {
        burger_name: $("#burger_name").val().trim()
    };

    // send new burger request to the burger database
    $.ajax("/api/burgers", {
        type: "POST",
        data: requestBurger
    }).then(
        function () {
            console.log("Added your requested burger to the list!");
            location.reload();
        }
    );
});

//delete that stuff ----remove the evidence