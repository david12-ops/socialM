"use client"

import { Avatar } from "@mui/material";
import { useAuthContext } from "../components/auth-context-provider";
import styles from "../styles/subscription.module.css"
import dynamic from "next/dynamic";

const Video = dynamic(() => import('../components/video'), { ssr: false });

export default function SubscriptionsPage() {

    const { user } = useAuthContext()
    const dempoAv = <Avatar alt={user?.email ? user.email : ""} src="">Dv</Avatar>

    return (
        <section>
            <h2 className={styles.title}>Nejnovější</h2>
            <section className={styles.section}>
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
    );
}
