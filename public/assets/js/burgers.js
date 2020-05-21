$(function() {

    $(".devourBtn").on("click", function(event) {

      let id = $(this).data("id");

      var devourBurger = {
        devoured: true
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourBurger
      }).then(
        function() {
          console.log("changed devoured to", devourBurger);

          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {

      event.preventDefault();
  
      let newBurger = {
        name: $("#newBurger").val().trim(),
        devoured: false
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new something something!");

          location.reload();
        }
      );
    });
});
  