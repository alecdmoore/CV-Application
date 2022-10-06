import React from "react";

const Education = (props) => {
  const { education } = props;
  return (
    <div>
      {education.finish && <h1>{education.school}</h1>}
      {education.finish && <h1>{education.major}</h1>}
      {education.finish && <h1>{education.dateGrad}</h1>}
    </div>
  );
};

export default Education;
