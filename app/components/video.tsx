import styles from "../styles/component.module.css"

export default function Video(params: { avatar: JSX.Element, title: string, channelName: string, viewsCount: string, timeFromUpload: string, image: string | undefined }) {
    const { avatar, channelName, viewsCount, title, timeFromUpload, image } = params

    return (
        <section className={styles.videoCard}>
            <div className={styles.videoPartCard}>Vítej</div>
            {/* {image ? <div><img src={image} alt={"demo"} /> </div> : <div>Zk</div>} */}
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: "30px" }}>
                {avatar}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>{title}</p>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p>{channelName}</p> <p>{viewsCount} zhlednutí - před {timeFromUpload}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function VideoHistory(params: { title: string, channelName: string, viewsCount: string, image: string | undefined }) {
    const { channelName, viewsCount, title, image } = params

    return (
        <section className={styles.videoHistoryCard}>
            <div className={styles.videoPartCard}>Vítej</div>
            {/* {image ? <div><img src={image} alt={"demo"} /> </div> : <div>Zk</div>} */}
            <div style={{ display: "flex", flexDirection: "column" }}>
                <p>{title}</p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>{channelName}</p> <p>{viewsCount} zhlednutí</p>
                </div>
            </div>
        </section>
    )
}