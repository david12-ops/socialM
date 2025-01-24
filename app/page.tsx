'use client';

import { useAuthContext } from './components/auth-context-provider';
import { Avatar } from '@mui/material';
import dynamic from "next/dynamic";

const CategoryBar = dynamic(() => import('./components/categoryBarMainPage'), { ssr: false })
const Video = dynamic(() => import('./components/video'), { ssr: false });

// eslint-disable-next-line import/no-default-export
export default function Home() {
    const { user } = useAuthContext()
    const dempoAv = <Avatar alt={user?.email ? user.email : ""} src="">Dv</Avatar>

    return (
        <div>
            {<CategoryBar />}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "40px" }}>
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
            </div>
        </div>
    );
}