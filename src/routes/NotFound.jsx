import { Link } from "react-router-dom";
import Title from "../components/Title";

const NotFound = () => (
    <>
        <Title text="404" />
        <h1>Ruta No existe</h1>
        <Link to="/">Go to Home</Link>
    </>
);

export default NotFound;