ZOHO.embeddedApp.on("PageLoad", function () {
    console.log("Widget Loaded");
});
ZOHO.embeddedApp.init();


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        Employee_Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        Phone: document.getElementById("phone").value,
        City: document.getElementById("city").value,
        Address: document.getElementById("address").value
    };

    ZOHO.CREATOR.API.addRecord({
        appName: "employee-management-app",
        formName: "Employee",
        data: data
    }).then(function (response) {

        console.log(response);

        if (response.code === 3000) {
            document.getElementById("msg").innerText = "Message sent successfully ";
            document.getElementById("contactForm").reset();
        } else {
            document.getElementById("msg").innerText = "Error while submitting ";
        }

    }).catch(function (error) {
        console.log(error);
        document.getElementById("msg").innerText = "Something went wrong ";
    });
});
