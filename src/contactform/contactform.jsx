import Button from "../button/button";
import { useState } from "react";
import style from "./contactform.module.css";
export default function Contactform() {
    const [name,setName] = useState(" ");
    const [email,setEmail] = useState(" ");
    const [text,setText] = useState(" ");

  function onsubmit(event) {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    
  }
  return (
    <>
      <div className={style.form_container}>
        <div className={style.main}>
          <div className={style.contact_buttons}>
            <div className={style.top_btn}>
              <Button isoutline={false} text={"VIA SUPPORT CHAT"} />
              <Button isoutline={false} text={"VIA CALL"} />
            </div>
            <Button isoutline={true} text={"VIA EMAIL FORM"} />
          </div>
          <form onSubmit={onsubmit}>
            <div className={style.form_control}>
              <label htmlFor="Name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={style.form_control}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="Email" />
            </div>

            <div className={style.form_control}>
              <label htmlFor="Text">Text</label>
              <textarea cols="30" rows="5" name="textarea"></textarea>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button isoutline={false} text={"SUBMIT"} />
            </div>

            <div>
                {name + "  " + email + "   " + text + "  "}
            </div>
          </form>
        </div>
        <div className="formImage">
          <img src="./images/Service 24_7-pana 1.svg" />
        </div>
      </div>
    </>
  );
}
