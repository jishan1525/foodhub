import { useRouteError } from "react-router-dom";

const ErrorPage = () => {  
    const err = useRouteError();
    console.log(err);  
    return (
        <div>
            <h1>Oops!!</h1>
            <p>Something went wrong</p>            
            <h2>{err.status + " : "+ err.statusText}</h2>
        </div>
    )
}
 export default ErrorPage; 