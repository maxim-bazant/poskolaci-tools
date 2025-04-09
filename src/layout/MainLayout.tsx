import styles from "./MainLayout.module.scss";
import burgerMenuIcon from "../assets/burger-bar.png";
import { useState } from "react";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className={styles.MenuContainer}>
                <div className={styles.MenuBarIcon} onClick={() => setIsMenuOpen(true)}>
                    <img src={burgerMenuIcon} alt="menu icon" />
                </div>
                <div className={`${styles.MenuBar} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <div className={styles.MenuCloseContainer}>
                        <button className={styles.MenuCloseIcon} onClick={() => setIsMenuOpen(false)}>
                            &times;
                        </button>
                    </div>
                    <p>Test</p>
                    <p>Test</p>
                </div>
            </div>
            {children}
        </div>
    );
}