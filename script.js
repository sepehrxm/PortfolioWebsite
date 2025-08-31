 function sendMail(){
    let parms = {
        from_name: document.getElementById("name1").value,
        from_email: document.getElementById("email1").value,
        message: document.getElementById("message1").value,

    }
    console.log(parms)
    emailjs.send("service_cdrdlvx","template_5a3xdsk",parms).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  })
}