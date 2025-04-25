console.log("script is working");
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("userForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission until validation

        if (!validateForm()) return;

        displayFormData();
    });
});

function validateForm() {
    let requiredFields = ["name", "mascot", "imageCaption", "personalBackground", "professionalBackground",
                          "academicBackground", "webDevBackground", "primaryPlatform"];
    
    for (let field of requiredFields) {
        if (document.getElementById(field).value.trim() === "") {
            alert(field + " is required!");
            return false;
        }
    }

    // Validate image file type
    let imageInput = document.getElementById("imageUpload");
    let file = imageInput.files[0];
    if (file) {
        let fileType = file.type;
        if (fileType !== "image/png" && fileType !== "image/jpeg") {
            alert("Image must be a PNG or JPG file!");
            return false;
        }
    } else {
        alert("Please upload an image.");
        return false;
    }

    // Validate acknowledgment checkbox
    if (!document.getElementById("acknowledgment").checked) {
        alert("You must acknowledge the statement.");
        return false;
    }

    return true;
}

function resetForm() {
    document.getElementById("userForm").reset();
    document.getElementById("formDataContainer").innerHTML = "";
    document.getElementById("formDataContainer").style.display = "none";
    document.getElementById("userForm").style.display = "block";
}

function addCourse() {
    let coursesContainer = document.getElementById("coursesContainer");
    let newCourseDiv = document.createElement("div");

    let newCourseInput = document.createElement("input");
    newCourseInput.type = "text";
    newCourseInput.placeholder = "New Course";

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        coursesContainer.removeChild(newCourseDiv);
    };

    newCourseDiv.appendChild(newCourseInput);
    newCourseDiv.appendChild(deleteButton);
    coursesContainer.appendChild(newCourseDiv);
}

function displayFormData() {
    let formDataContainer = document.getElementById("formDataContainer");
    let form = document.getElementById("userForm");

    // Hide form on submission
    form.style.display = "none";

    formDataContainer.innerHTML = `
        <h2>Submitted Data</h2>
        <p><strong>Name:</strong> ${document.getElementById("name").value}</p>
        <p><strong>Mascot:</strong> ${document.getElementById("mascot").value}</p>
        <p><strong>Image Caption:</strong> ${document.getElementById("imageCaption").value}</p>
        <p><strong>Personal Background:</strong> ${document.getElementById("personalBackground").value}</p>
        <p><strong>Professional Background:</strong> ${document.getElementById("professionalBackground").value}</p>
        <p><strong>Academic Background:</strong> ${document.getElementById("academicBackground").value}</p>
        <p><strong>Web Development Background:</strong> ${document.getElementById("webDevBackground").value}</p>
        <p><strong>Primary Computer Platform:</strong> ${document.getElementById("primaryPlatform").value}</p>
        <p><strong>Funny Thing:</strong> ${document.getElementById("funnyThing").value}</p>
        <p><strong>Anything Else?</strong> ${document.getElementById("anythingElse").value}</p>
    `;

    let courses = document.querySelectorAll("#coursesContainer input[type='text']");
    if (courses.length > 0) {
        formDataContainer.innerHTML += "<p><strong>Courses Currently Taking:</strong></p><ul>";
        courses.forEach(course => {
            if (course.value.trim() !== "") {
                formDataContainer.innerHTML += `<li>${course.value}</li>`;
            }
        });
        formDataContainer.innerHTML += "</ul>";
    }

    // Show reset link for restarting form
    formDataContainer.innerHTML += `<br><a href="#" onclick="resetForm()">Reset Form</a>`;
    formDataContainer.style.display = "block";
}