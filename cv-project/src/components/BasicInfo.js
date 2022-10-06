import React from "react";

const BasicInfo = (props) => {
  const { basic } = props;
  return (
    <div>
      {basic.finish && <h1>{basic.name}</h1>}
      {basic.finish && <h1>{basic.email}</h1>}
      {basic.finish && <h1>{basic.phone}</h1>}
    </div>
  );
};

export default BasicInfo;
