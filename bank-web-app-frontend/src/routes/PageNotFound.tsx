import { useRouteError } from "react-router-dom";

function PageNotFound() {
    
    const error = useRouteError();
    console.error(error); 
    
    return (
        <div className="Page-Not-Found">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{(error as any)?.statusText || (error as any)?.message}</i>
            </p>
        </div>
    );
}

export default PageNotFound;