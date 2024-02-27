import React from "react";
import "./contact.css";
import { useRef } from "react";

const Contact = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();

  const reInputs = () => {
    inputRef1.current.value = "";
    inputRef2.current.value = "";
    inputRef3.current.value = "";
    inputRef4.current.value = "";
    inputRef5.current.value = "";
  };

  return (
    <section id="contact">
      <img src="./assets/l2.png" className="contact-img" alt="" />
      <div className="contact-items">
        <h2 className="title">get in touch</h2>
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control mr-4"
              placeholder="First Name"
              ref={inputRef1}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              ref={inputRef2}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control mr-4"
              placeholder="Email Address"
              ref={inputRef3}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              ref={inputRef4}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="5"
              id="comment"
              placeholder="Massage"
              ref={inputRef5}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-secondary button"
            data-toggle="modal"
            data-target="#Sended"
            onClick={reInputs}
          >
            Send
          </button>
        </form>

        <div className="modal fade" id="Sended">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-body">your massage sended :)</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  {"Close :("}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
