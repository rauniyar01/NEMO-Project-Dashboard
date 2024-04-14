import React from 'react';
import emailjs from "emailjs-com";
const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_a2b6ra7",
      "template_rcy4gb7",
      e.target,
      "user_zjdALzopp4CCqC3fTWpeF"
    ).then(res=>{
        console.log(res);
    }).catch(err=> console.log(err));
    window.location.reload();
  }
  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <form
        className="row"
        style={{ margin: "25px 45px 55px 100px" }}
        onSubmit={sendEmail}
      >
        <label>Vehicle ID</label>
        <input type="text" name="name" className="form-control" />

        <label>Email ID of High Emitter Vehicle's Owner</label>
        <input type="email" name="user_email" className="form-control" />

        <label>Message</label>
        <textarea name="message" rows="12" className="form-control" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};

export default Mailer;
