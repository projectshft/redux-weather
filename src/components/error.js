import { useSelector } from "react-redux"

const ErrorComponent = () => {
  const error = useSelector((state) => state.error);
  if (error) {
    return (
      <div className="alert" role="alert">
        {error}
      </div>
    );
  } else {
    return null;
  }
};

export default ErrorComponent;
