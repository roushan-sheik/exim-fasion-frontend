import React from "react";

const EximTitle = ({
  title,
  description,
}: {
  title: string;
  description: string | false;
}) => {
  return (
    <div className="my-8 lg:my-20 px-4">
      <h2 className="text-3xl text_b_pri lg:text-5xl text-center font-medium">
        {title}
      </h2>
      {description && (
        <p className={`text-center text_b_sec text-base  mt-2 lg:mt-3`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default EximTitle;
