let _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("submit", function (event) {
      event.preventDefault();
      let nameElement = document.getElementById("name");
      let emailElement = document.getElementById("email");
      let phoneElement = document.getElementById("phone");
      let educationElement = document.getElementById("education");
      let experienceElement = document.getElementById("experience");
      let skillsElement = document.getElementById("skills");
      
      let name = "";
      let email = "";
      let phone = "";
      let education = "";
      let experience = "";
      let skills = "";
      
      if (
        nameElement &&
        emailElement &&
        educationElement &&
        experienceElement &&
        skillsElement
      ) {
        name = nameElement.value;
        email = emailElement.value;
        phone = phoneElement.value;
        education = educationElement.value;
        experience = experienceElement.value;
        skills = skillsElement.value;
      } else {
        console.error("One or more elements are missing");
        return; 
      }
      var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> "
        .concat(name, " </p>\n    <p><strong>Email:</strong> ")
        .concat(email, "</p>\n    <p><strong>Phone:</strong> ")
        .concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>")
        .concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>")
        .concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>")
        .concat(skills, "</p>\n    ");
      var resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
      } else {
        console.error("The resume output element is missing");
      }
    });