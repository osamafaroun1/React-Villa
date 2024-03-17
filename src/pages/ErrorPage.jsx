import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    return (
        <div className="w-50 text-center mt-5 pt-5 m-auto">
            <div id="error-page">       
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <button onClick={() => navigate('/', { replace: true })} >goToBack</button>
            </div>
        </div>
    )
}
export default ErrorPage
