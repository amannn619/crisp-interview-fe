import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";

export default function AppLayout() {
    return (
        <div>
            <Navigation></Navigation>

            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}