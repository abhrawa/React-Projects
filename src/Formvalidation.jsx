import React, { useState } from "react";
import "./Formvalidation.css";
import InputText from "./InputText";
function ValidateData() {
  const [FirstName, SetFname] = useState("");
  const [LastName, SetLname] = useState("");
  const [Email, Setmail] = useState("");
  const [Password, Setpassword] = useState("");
  const [Reconfirm, Setreconfirm] = useState("");

  const [errFname, Seterrfname] = useState("");
  const [errLname, SeterrLname] = useState("");
  const [errEmail, SeterrEmail] = useState("");
  const [errPass, SeterrPass] = useState("");
  const [errReconfirm, Seterreconfm] = useState("");

  const next = () => {
    if (FirstName === "") {
      Seterrfname("First name is  mandatory");
      console.log("l1", errFname);
    } else if (FirstName !== "") {
      Seterrfname("");
      console.log("l2", errFname);
    }
    if (LastName === "") {
      SeterrLname("Last name is  mandatory");
    } else if (LastName !== "") {
      SeterrLname("");
    }
    if (Email === "") {
      SeterrEmail("Email is  mandatory");
    } else if (Email !== "") {
      SeterrEmail("");
    }
    if (Password.length < 8) {
      SeterrPass("Password should be of atleast 8 characters");
    } else if (Password.length > 8) {
      SeterrPass("");
    }
    if (Reconfirm === "") {
      Seterreconfm("Reconfirm required");
    } else if (Reconfirm !== "") {
      Seterreconfm("");
    }
  };
  return (
    <>
      <div className="signupform">
        <div className="fullname">
          <div>
            <img
              style={{ height: "120px" }}
              src="src\images\google.png"
              alt=""
            />

            <InputText
              placeholder="Enter first name"
              errMessage={errFname}
              value={FirstName}
              onChange={(e) => {
                SetFname(e.target.value);
              }}
            />

            <InputText
              placeholder="Enter last name"
              errMessage={errLname}
              value={LastName}
              onChange={(e) => {
                SetLname(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <InputText
            placeholder="Email"
            errMessage={errEmail}
            type="text"
            value={Email}
            onChange={(e) => {
              Setmail(e.target.value);
            }}
          />
        </div>
        <div className="password">
          <div>
            <InputText
              placeholder="Password"
              type="password"
              errMessage={errPass}
              value={Password}
              onChange={(e) => {
                Setpassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <InputText
            placeholder="Reconfirm Password"
            type="password"
            errMessage={errReconfirm}
            value={Reconfirm}
            onChange={(e) => {
              Setreconfirm(e.target.value);
            }}
          />
        </div>
        <button
          style={{ padding: "2px", margin: "8px", fontSize: "13px" }}
          onClick={next}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default ValidateData;
