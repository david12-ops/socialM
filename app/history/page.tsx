"use client"

import { Avatar, Button, styled } from "@mui/material";
import styles from "../styles/history.module.css"
import stylesComp from "../styles/component.module.css"
import { MdDelete } from "react-icons/md";
import { IoStopCircleOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import { useAuthContext } from "../components/auth-context-provider";


const SearchBar = () => {
    return (
        <div className={stylesComp.searchContainer}>
            <div className={stylesComp.searchBar}>
                <input type="text" placeholder="Hledat" />
                <FaSearch size={20} />
            </div>
        </div>
    )
}

export default function HistoryPage() {

    const CostumeButton = styled(Button, {
        shouldForwardProp: (prop) => prop !== 'customProp',
    })(({ theme }) => ({
        color: "black",
        backgroundColor: "rgba(128, 128, 128, 0.3)",
        borderRadius: "20px",
        ":hover": {
            backgroundColor: "rgba(128, 128, 128, 0.1)",
        }
    }));

    const Video = dynamic(() => import('../components/video'), { ssr: false });
    const { user } = useAuthContext()
    const dempoAv = <Avatar alt={user?.email ? user.email : ""} src="">Dv</Avatar>

    return (
        <section>
            <section className={styles.mainSection}>
                <div className={styles.section1}>
                    <section className={styles.menu}>
                        <SearchBar />
                        <CostumeButton><div className={styles.Label}><MdDelete size={20} />Vymazat celou historii vyhledávání</div></CostumeButton>
                        <CostumeButton><div className={styles.Label}><IoStopCircleOutline size={20} /> Pozastavit historii sledování</div></CostumeButton>
                        <CostumeButton><div className={styles.Label}><IoSettingsOutline size={20} /> Spravovat celou historii</div></CostumeButton>
                    </section>
                </div>
                <section className={styles.section2}>
                    <h2 className={styles.title}>Historie sledování</h2>
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={""} />}
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={"2h"} />}
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={"2h"} />}
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={"2h"} />}
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={"2h"} />}
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={"2h"} />}
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={"2h"} />}
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={"2h"} />}
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={"2h"} />}
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={"2h"} />}
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={"2h"} />}
                    {<Video title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/demoPreview.jpg"} avatar={dempoAv} timeFromUpload={"2h"} />}
                </section>
            </section>
        </section>
    );
}
