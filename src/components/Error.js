import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page" style={{ display:"grid" ,  textAlign:"center" , padding:10}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.status}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
