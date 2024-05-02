import { ArrowPathIcon } from "../icons";

const SimpleLoader = () => {
  return (
    <>
      <div
        className="simple-loader"
      >
        <ArrowPathIcon
          strokeWidth={2.2} 
          style={{ width: "60px", height: "60px", }} 
          className="rotate"
        />
      </div>
    </>
  );
};

export default SimpleLoader;