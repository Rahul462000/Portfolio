import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    pNumber: "",
    Email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    // in below example user ka jo state mein data hai uper usestate mein use accesss kar sakte hai
    // setdata ko inputdata ke andr use kar rahe hai
    // pehle preVal ke data ko access kara aur first name attribute ko karo fetch kar rahe hai aur jo use name input mein enter kar raha hai use value mein store kar raha hai
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`Your name is ${data.fullName},
    phone number is ${data.pNumber},
    email is ${data.Email}, 
    your message is ${data.msg} `);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-5 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="fullName"
                  value={data.fullName}
                  onChange={inputEvent}
                  placeholder="Enter your name here"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="pNumber"
                  value={data.pNumber}
                  onChange={inputEvent}
                  placeholder="Enter your mobile number here"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="Email"
                  value={data.Email}
                  onChange={inputEvent}
                  placeholder="Your Email Address here"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div>
              {/* <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div> */}
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
