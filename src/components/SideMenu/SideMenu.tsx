import styles from "./SideMenu.module.scss"
import { useState } from "react";
import burgerMenuIcon from "../../assets/burger-bar.png";
import NavLink from "./NavLink/NavLink";


export default function SideMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
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

                <div className={styles.menuLinks} onClick={() => {setIsMenuOpen(false)}}>
                    <NavLink title="FlashCard Maker" navigateTo="flashcard-maker" />
                    <NavLink title="SlideShow" navigateTo="slide-show" />
                </div>
            </div>
        </div>
    );
}