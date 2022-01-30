import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Gaurav" },
  { meta: "last name", metaInfo: "Chauhan" },
  { meta: "Age", metaInfo: "22 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Address", metaInfo: "Melbourne, Australia" },
  { meta: "phone", metaInfo: "+61422214461" },
  { meta: "Email", metaInfo: "Gaurav27c@gmail.com" },
  { meta: "langages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => ( 
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
