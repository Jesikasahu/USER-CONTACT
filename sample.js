ZOHO.embeddedApp.on("PageLoad", function () {
    console.log("Widget Loaded");

    // submit event ABHI bind hoga (safe)
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        console.log("Submit clicked");

        ZOHO.CREATOR.API.addRecord({
            appName: "employee-management-app",   
            formName: "Employee",                  
            data: {
                Employee_Name: document.getElementById("name").value,
                Email: document.getElementById("email").value,
                Phone: document.getElementById("phone").value,
                City: document.getElementById("city").value,
                Address: document.getElementById("address").value
            }
        }).then(function (response) {

            console.log("RESPONSE ", response);

            if (response.code === 3000) {
                document.getElementById("msg").innerText = "Message sent successfully ";
                document.getElementById("contactForm").reset();
            } else {
                document.getElementById("msg").innerText = "Zoho Error ";
            }

        }).catch(function (error) {
            console.error("API ERROR ", error);
            document.getElementById("msg").innerText = "API Failed ";
        });
    });
});


ZOHO.embeddedApp.init();

