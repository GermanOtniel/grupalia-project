import { ArrowPathIcon } from "../icons";

interface ILoaderWithDescriptionProps {
  description?: string;
}

const LoaderWithDescription: React.FC<ILoaderWithDescriptionProps> = ({ description = "Cargando más datos..." }) => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: 15,
        backgroundColor: "#b8b8b8",
        margin: "20px 0px"
      }}
    >
      <ArrowPathIcon className="rotate" />
      <p 
      
        style={{
          fontWeight: "bold",
          margin: 0
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default LoaderWithDescription;