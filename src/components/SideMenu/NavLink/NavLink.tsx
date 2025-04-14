import { useNavigate } from "react-router-dom"
import styles from "./NavLink.module.scss"

interface NavLinkProps {
    title: string,
    navigateTo: string
}

export default function NavLink({ title, navigateTo }: NavLinkProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(navigateTo)
    }

    return(
        <div className={styles.container} onClick={handleClick}>
            <p>{title}</p>
        </div>
    )
}