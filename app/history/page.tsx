"use client"

import { Button, styled } from "@mui/material";
import { VideoHistory } from "../components/video";
import styles from "../styles/history.module.css"
import stylesComp from "../styles/component.module.css"
import { MdDelete } from "react-icons/md";
import { IoStopCircleOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


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
        fontSize: "12px",
        padding: "10px",
        ":hover": {
            backgroundColor: "rgba(128, 128, 128, 0.1)",
        }
    }));

    return (
        <section>
            <h2 className={styles.title}>Historie sledování</h2>
            <section className={styles.mainSection}>
                <section className={styles.section1}>
                    <SearchBar />
                    <CostumeButton><MdDelete size={20} /> Vymazat celou historii vyhledávání</CostumeButton>
                    <CostumeButton><IoStopCircleOutline size={20} /> Pozastavit historii sledování</CostumeButton>
                    <CostumeButton><IoSettingsOutline size={20} /> Spravovat celou historii</CostumeButton>
                </section>
                <section className={styles.section2}>
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                    {<VideoHistory title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} image={"/public/demoPreview.jpg"} />}
                </section>
            </section>
        </section>
    );
}
