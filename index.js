// const findClasses = require("./findClasses.js").findClasses;
function validateUserInput() {

    "use strict";
    var validationResult = false;

    var apexFileContent = document.getElementsByName("apexFileContent")[0].value;

    // var index = apexFileContent.indexOf(" class " , 0);
  
    // console.log(index);
  
    // findClasses(apexFileContent);
    findFunctions(apexFileContent);
  //   validationResult = (checkPersonName(username) &&
  //       checkEmail(email) &&
  //       checkPhoneNumber(phone) &&
  //       checkPassword(password) &&
  //       checkPasswordSame(password , passwordConfirmation)
  //   );



  // if (validationResult) {
  //   alert("validation passed, you're now allowed to submit.");
  // }
}