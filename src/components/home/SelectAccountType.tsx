import React from "react";
import FormHeader from "./FormHeader";

const SelectAccountType = () => {
  return (
    <div>
      <FormHeader
        title={
          <p className="font-normal">
            To join us tell us{" "}
            <strong className="font-medium">what type of account</strong> you
            are opening
          </p>
        }
      />
    </div>
  );
};

export default SelectAccountType;
