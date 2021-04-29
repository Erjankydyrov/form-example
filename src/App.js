import axios from "axios";
import { useState } from "react";
import "./App.css";
import Input from "./Input";

function App() {
  const classNames = ["App"];
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    classNames.push("submitted");
  }
  function submitClickCallback() {
    setSubmitted(true);
  }

  function formSubmitCallback(event) {
    const data = new FormData(event.target);

    const user = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      gender: data.get("gender"),
      firstName: data.get("email"),
      firstName: data.get("phone"),
      // ...
    };

    axios.post(
      `https://form-example-d4a67-default-rtdb.firebaseio.com/form.json`,
      {
        forms: user,
      }
    );

    event.preventDefault();
  }

  // useEffect (() => {
  //   axios.get(`https://form-example-d4a67-default-rtdb.firebaseio.com/form.json`)
  //       .then((responce) => {
  //         let arr = responce.data.forms;
  //       })
  // }, [])
  return (
    <form className="App" onSubmit={formSubmitCallback}>
      <div>
        <label for="firstName">First name</label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          pattern="[a-zA-Z ]+"
          validity="hahoho"
          required
        />
        <span className="error">First name is required</span>
      </div>
      <div>
        <label for="lastName">Last name</label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          pattern="[a-zA-Z ]+"
          validity="hohoho"
          required
        />
        <span className="error">Last name is required</span>
      </div>
      <div>
        <label for="email">Email</label>
        <Input
          type="email"
          name="email"
          id="email"
          pattern="[a-zA-Z0-9._-+]+@[a-zA-Z0-9._-+]+\.com" // \. обозначает точку, а просто . может обозначать все от букв до цифр и так далее
          validity="hohoho"
          required
        />
        <span className="error">Valid email is required</span>
      </div>
      <div>
        <label for="phone">Phone</label>
        <Input
          type="tel"
          name="phone"
          id="phone"
          pattern="(0|\+996)(777)[0-9]{6}" // () в скобках фиксированные значения
          validity="hohoho"
          required
        />
        <span className="error"> Valid phone number is required</span>
      </div>
      <div>
        <label for="dateOfBirth">Date of birth</label>
        <Input type="date" name="dateOfBirth" id="dateOfBirth" required validity="hohoho"/>
        <span className="error">Date of birth required</span>
      </div>
      <div>
        <label for="gender">Gender</label>
        <Input
          name="gender"
          required
          type="select"
          validity="Hihihi"
          options={{
            "": "- Select -",
            male: "Male",
            female: "Female",
          }}
          id="gender"
        />
        <span className="error">Gender is required.</span>
      </div>
      <div>
        <label>Education</label>
        <div>
          <label for="school">
            <Input
              type="radio"
              name="education"
              id="school"
              value="school"
              required
            />{" "}
            School
          </label>
        </div>
        <div>
          <label for="university">
            <Input
              type="radio"
              name="education"
              id="university"
              value="university"
              required
            />{" "}
            University
          </label>
        </div>
      </div>
      <div>
        <label>Languages</label>
        <div>
          <label for="english">
            <Input
              type="checkbox"
              name="language"
              id="english"
              value="english"
            />{" "}
            English
          </label>
        </div>
        <div>
          <label for="kyrgyz">
            <Input type="checkbox" name="language" id="kyrgyz" value="kyrgyz" />{" "}
            Kyrgyz
          </label>
        </div>
        <div>
          <label for="russian">
            <Input
              type="checkbox"
              name="language"
              id="russian"
              value="russian"
            />{" "}
            Russian
          </label>
        </div>
      </div>
      <div>
        <label for="address">Address</label>
        <Input type="text" name="address" id="address" validity="hohoho" required />
        <span className="error">Address is required</span>
      </div>
      <div>
        <label for="city">City</label>
        <Input type="text" name="city" id="city" validity="hohoho" required />
        <span className="error">City is required</span>
      </div>
      <div>
        <label for="zip">ZIP</label>
        <Input type="text" name="zip" id="zip" validity="hohoho" pattern="72[0-9]{4}" required />
        <span className="error">ZIP must be in 72xxxx format</span>
      </div>
      <div>
        <button onClick={submitClickCallback}>Submit</button>
      </div>
      <table></table>
    </form>
  );
}

export default App;
