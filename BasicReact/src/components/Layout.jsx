import { Outlet } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navbar";

function Layout() {
    return (
        <div style={{ backgroundColor: "lightsteelblue", padding: "20px" }}>
            <Header />
            <Navigation />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;