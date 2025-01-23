"use client"

import { Avatar } from "@mui/material";
import { useAuthContext } from "../components/auth-context-provider";
import styles from "../styles/favoriteVideos.module.css"
import dynamic from "next/dynamic";

const Video = dynamic(() => import('../components/video'), { ssr: false });


export default function FavoriteVideosPage() {
    const { user } = useAuthContext()
    const dempoAv = <Avatar alt={user?.email ? user.email : ""} src="">Dv</Avatar>

    return (
        <section>
            <h2 className={styles.title}>Oblíbená videa</h2>
            <section className={styles.section}>
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
                {<Video avatar={dempoAv} title={"Zkouška"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
            </section>
        </section>
    );
}
