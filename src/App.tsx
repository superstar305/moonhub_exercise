import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="App">
      <UserCard
        name="James Hiddleston"
        first_name="James"
        last_name="Hiddleston"
        current_title="Machine Learning Engineer"
        location="San Francisco Bay Area"
        phone_number="0123456789"
        personal_email="super.star31305@gmail.com"
        linkedIn=""
        experience={[
          "Senior Machine Learning Engineer at Google Oct",
          "Junior Machine Learning Engineer at Shoptify Jun",
        ]}
        education={["Standard University, M. S., Computer Science Oct"]}
      />
    </div>
  );
}

export default App;
