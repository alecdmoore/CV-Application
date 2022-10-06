import React from "react";

const Experience = (props) => {
  const { experience } = props;
  return (
    <div>
      {experience.finish && <h1>{experience.company}</h1>}
      {experience.finish && <h1>{experience.position}</h1>}
      {experience.finish && <h1>{experience.task}</h1>}
      {experience.finish && <h1>{experience.from}</h1>}
      {experience.finish && <h1>{experience.until}</h1>}
    </div>
  );
};

export default Experience;
