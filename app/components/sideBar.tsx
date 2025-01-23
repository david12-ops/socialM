'use client'
import { User } from "firebase/auth";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { MdOutlineNewspaper, MdOutlinePodcasts, MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory, GoTrophy } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { Divider } from "@mui/material";
import { CgGames } from "react-icons/cg";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoMusicalNotesOutline } from "react-icons/io5";
import styles from "../styles/component.module.css";
import { usePathname } from "next/navigation";
import { TbLogout2, TbLogin2 } from "react-icons/tb";
import { authUtils } from "../../firebase/auth-utils";
import { FaExchangeAlt } from "react-icons/fa";

export default function SideBarContent(params: { user: User | null | undefined }) {
    const { user } = params
    const pathName = usePathname();

    const isActive = (path: string) => pathName === path;

    return (
        <section className={styles.sideBar}>
            <section className={styles.sideBarItem}>
                <ul>
                    <li>{<Link href={"/"}><div className={`${styles.linkLabel} ${isActive("/") ? styles.active : ""}`}><IoMdHome size={20} /> Domů</div></Link>}</li>
                    {!user && (
                        <li>{<Link href={"/subscriptions"}><div className={`${styles.linkLabel} ${isActive("/subscriptions") ? styles.active : ""}`}><MdOutlineSubscriptions size={20} /> Odběry</div></Link>}</li>
                    )}
                </ul>
            </section>
            <Divider />
            {!user && (
                <section className={styles.sideBarItem}>
                    <h4>{<Link href={"/"}></Link>}Vy &gt;</h4>
                    <ul>
                        <li>{<Link href={"/history"}><div className={`${styles.linkLabel} ${isActive("/history") ? styles.active : ""}`}><GoHistory size={20} /> Historie</div></Link>}</li>
                        <li>{<Link href={"/yoursVideos"}><div className={`${styles.linkLabel} ${isActive("/yoursVideos") ? styles.active : ""}`}><GoVideo size={20} /> Vaše videa</div></Link>}</li>
                        <li>{<Link href={"/favoritesVideos"}><div className={`${styles.linkLabel} ${isActive("/favoritesVideos") ? styles.active : ""}`}><AiOutlineLike size={20} /> Oblíbená videa</div></Link>}</li>
                    </ul>
                </section>
            )}
            <Divider />
            {user && (
                <section className={styles.sideBarItem}>
                    <h4>Odběry</h4>
                </section>
            )}
            <Divider />
            <section className={styles.sideBarItem}>
                <h4>Prozkoumat</h4>
                <ul>
                    <li>{<Link href={"/"}><div className={styles.linkLabel}><FaFireFlameCurved size={20} /> Trendy</div></Link>}</li>
                    <li>{<Link href={"/"}><div className={styles.linkLabel}><IoMusicalNotesOutline size={20} /> Hudba</div></Link>}</li>
                    <li>{<Link href={"/"}><div className={styles.linkLabel}><PiFilmSlateDuotone size={20} /> Filmy</div></Link>}</li>
                    <li>{<Link href={"/"}><div className={styles.linkLabel}><CgGames size={20} /> Hry</div></Link>}</li>
                    <li>{<Link href={"/"}><div className={styles.linkLabel}><MdOutlineNewspaper size={20} /> Zprávy</div></Link>}</li>
                    <li>{<Link href={"/"}><div className={styles.linkLabel}><GoTrophy size={20} /> Sport</div></Link>}</li>
                    <li>{<Link href={"/"}><div className={styles.linkLabel}><MdOutlinePodcasts size={20} /> Podcasty</div></Link>}</li>
                </ul>
            </section>
            <Divider />
            <section className={styles.sideBarItem}>
                <ul>
                    {user && (
                        <li>{<Link href={"/"}><div onClick={authUtils.logout} className={styles.linkLabel}><TbLogout2 size={20} /> Odhlásit se</div></Link>}</li>
                    )}
                    {user && (
                        <li>{<Link href={"/changePassword"}><div className={`${styles.linkLabel} ${isActive("/changePassword") ? styles.active : ""}`}><FaExchangeAlt size={20} /> Změna hesla</div></Link>}</li>
                    )}
                    {user && (
                        <li>{<Link href={"/changeEmail"}><div className={`${styles.linkLabel} ${isActive("/changeEmail") ? styles.active : ""}`}><FaExchangeAlt size={20} /> Změna emailu</div></Link>}</li>
                    )}
                    {!user && (
                        <li>{<Link href={"/login"}><div className={`${styles.linkLabel} ${isActive("/login") ? styles.active : ""}`}><TbLogin2 size={20} /> Přihlásit se</div></Link>}</li>
                    )}
                </ul>
            </section>
        </section>
    )
}