import style from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { useRef, useState } from "react";

const ContactForm = () => {
  let nameElement = useRef();
  let emailElement = useRef();
  let textElement = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    const name = nameElement.current.value;
    const email = emailElement.current.value;
    const text = textElement.current.value;

    console.log(name, email, text);
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
            <input type="text" name="name" ref={nameElement} />
          </div>

          <div className={style.form_contact}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" ref={emailElement} />
          </div>

          <div className={style.form_contact}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" ref={textElement} />
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
