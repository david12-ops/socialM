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
        <section>
            {<CategoryBar />}
            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "40px" }}>
                {<Video avatar={dempoAv} title={"Zkouškassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"} channelName={"Demo"} viewsCount={'2 tis.'} timeFromUpload={'2h'} image={"/public/demoPreview.jpg"} />}
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