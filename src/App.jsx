import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserProvider";

import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";
import Perfil from "./routes/Perfil";
import Register from "./routes/Register";

import LayoutContainerForm from "./components/layouts/LayoutContainerForm";
import LayoutRedirect from "./components/layouts/LayoutRedirect";
import LayoutRequireAuth from "./components/layouts/LayoutRequireAuth";
//import Navbar from "./components/Navbar";
import NavbarSuper from "./components/NavbarSuper";

const App = () => {
    const { user } = useContext(UserContext);

    if (user === false) {
        return (
            <>
                <p>Loading...</p>
            </>
        );
    };

    return (
        <>
            {/* <Navbar /> */}
            <NavbarSuper />
            <Routes>
                <Route path="/" element={<LayoutRequireAuth />}>
                    <Route index element={<Home />} />
                    <Route path="perfil" element={<Perfil />} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Route>

                <Route path="/" element={<LayoutContainerForm />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route path="/:nanoid" element={<LayoutRedirect />}>
                    <Route index element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;