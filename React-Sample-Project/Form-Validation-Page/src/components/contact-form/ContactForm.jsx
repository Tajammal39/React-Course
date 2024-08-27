import style from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();

    let name = event.target[0].value;
    let email = event.target[1].value;
    let text = event.target[2].value;
    console.log(name, email, text);

    console.log(event);

    // console.log(event.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdLocalPhone fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={style.form_contact}>
            <label htmlFor="name">Label Name</label>
            <input type="text" name="name" />
          </div>

          <div className={style.form_contact}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>

          <div className={style.form_contact}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>

      <div className={style.contact_image}>
        <img src="girl.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
