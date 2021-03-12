
// SENDING THE EMAIL

const btn = document.querySelector("button")
const inputs = document.querySelector("form")

btn.addEventListener("click", () => {
     Email.send({
            SecureToken: "9ffe0ad5-6e4a-4e0c-b9a2-04ef9f739a4e", //MailTrap
            // SecureToken: "ecae906c-4ee3-4470-b305-4d78e179020b ", //Gmail            
            To : "meghanspinn230@gmail.com",
            From : inputs.elements["email"].value,
            Subject: `You have a new message`,
            Body: inputs.elements["message"].value + "<br>" + inputs.elements["name"].value,
            })
            .then(msg => 
            alert("Mail has been sent successfully")
            );
});
