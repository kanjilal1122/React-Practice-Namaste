import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      style={{ display: "grid", textAlign: "center", padding: 150 }}
    >
      <h1>Oops!</h1>
      <h2>Sorry, an unexpected error has occurred.</h2>
      <h2>{error.status}</h2>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
