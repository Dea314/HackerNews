import emailjs from "emailjs-com";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const [mail, setMail] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!mail) return alert;
    setMail("");

    emailjs
      .sendForm(
        "service_wbw9jut",
        "template_p20vgn5",
        e.target,
        "LWy6sRSkucf2qHz0M"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={sendEmail}
        sx={{
          width: 300,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <h1>Contact Us</h1>
        <TextField
          type="text"
          id="name"
          name="name"
          label="Your Name"
          required
          size="small"
          margin="normal"
        />
        <TextField
          type="text"
          id="user-email"
          name="user-email"
          label="Your E-Mail"
          required
          size="small"
          margin="normal"
        />
        <TextField
          multiline
          type="text"
          id="message"
          name="message"
          label="Your Message"
          required
          margin="normal"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <Button type="submit" variant="contained" disableElevation>
          Send
        </Button>
      </Box>
    </div>
  );
};

export default Contact;
