import { WarningIcon } from "../icons";

const ErrorView = () => {

  return (
    <>
      <div 
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WarningIcon stroke="#c20d0d" />
        <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "light", marginTop: "0px", color: "#c20d0d" }}>
          Ha ocurrido un error inesperado
        </p>
      </div>
    </>
  );  
};

export default ErrorView;