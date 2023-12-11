import React from "react";

const Options = (props) => {
  return (
    <>
      {props.options.map((item) => (
        <button
          onClick={(e) => {
            vanOptions(e.target.getAttribute("data-id"));
          }}
          data-id={item.id}
          className="bg-blue-500 top-50 relative hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </>
  );
};

export default Options;
