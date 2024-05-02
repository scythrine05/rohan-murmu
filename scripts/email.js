import emailjs from "@emailjs/browser";

const sendMail = async (name, email, msg) => {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: name,
      to_name: "Rohan Murmu",
      reply_to: email,
      to_email: "rohanmurmu.7120@gmail.com",
      message: msg,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};

const submit = document.getElementById("submit");
var textboxes = document.querySelectorAll(".input-text");

const resetFields = () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  textboxes.forEach((textbox) => textbox.classList.remove("not-empty"));
  submit.value = "send";
};

const onSubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Fields should not be empty");
    return;
  }
  submit.value = "sending";
  sendMail(name, email, message)
    .then(() => {
      console.log("Done");
      alert("Thanks for Contacting");
      resetFields();
    })
    .catch((err) => {
      console.error("EmailJS error: ", err);
    });
};

submit.addEventListener("click", onSubmit);
