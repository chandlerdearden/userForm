$(document).ready(function() {
  
  //  Prevent bad phone inputs
  $('#phone').on('input', function() {
    $(this).val(function(index, value) {
      return value.replace(/\D/g, '');
    });
  });
    $("#myForm").submit(function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Validate inputs
    var firstName = $.trim($("#firstName").val());
    var lastName = $.trim($("#lastName").val());
    var email = $.trim($("#email").val());
    var phone = $.trim($("#phone").val()).replace(/[^a-z0-9\s]/gi, '');
  
      // Perform validation checks

      if (firstName === "") {
        alert("Please enter your first name.");
        return;
      }
      if (lastName === "") {
        alert("Please enter your last name.");
        return;
      }
  
      if (email === "") {
        alert("Please enter your email.");
        return;
      }
  
      if (phone === "") {
        alert("Please enter your phone number.");
        return;
      }
      // Submit the form via AJAX to the PHP function
      $.ajax({
        url: $(this).attr("action"),
        type: $(this).attr("method"),
        data: $(this).serialize(),
        success: function(response) {

          // Reset the form and toggle success modal
          $("#successModal").modal("toggle");
          $("#myForm")[0].reset();
        },
        error: function(xhr, status, error) {
          alert(`An ${error} occurred while submitting the form.`);
        }
      });
    });
  });
  