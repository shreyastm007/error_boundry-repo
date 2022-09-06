import React, { useState } from "react";

function PersonDetails() {
  const [person, setPerson] = useState({
    userName: "Shreyas",
    age: 22,
  });
  return <div>{person.userName.filter()}</div>;
}

export default PersonDetails;