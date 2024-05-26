import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col gap-5 h-screen justify-center items-center">
      <h1 className="text-7xl text-green-500 font-bold">Oops!</h1>
      <p className="text-xl ">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="font-bold text-xl">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}