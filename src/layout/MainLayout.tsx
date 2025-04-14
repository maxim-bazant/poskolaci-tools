import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import styles from "./MainLayout.module.scss";


export default function MainLayout() {

    return (
        <div className={styles.container}>
            <SideMenu />
            <Outlet />
        </div>
    );
}