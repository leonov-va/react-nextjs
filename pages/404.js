import AppLink from "../components/UI/AppLink/AppLink";

const Error = () => {
  return (
    <>
      <div className="error-404">
        <h1>Error 404!</h1>
        <AppLink href="/" text="Back to home" />
      </div>
      <style jsx>{`
        .error-404 {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Error;
