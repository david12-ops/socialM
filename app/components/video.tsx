import styles from "../styles/component.module.css"

export default function Video(params: { avatar: JSX.Element, title: string, channelName: string, viewsCount: string, timeFromUpload: string, image: string | undefined }) {
    const { avatar, channelName, viewsCount, title, timeFromUpload, image } = params

    return (
        <section className={styles.videoCard}>
            <div className={styles.videoPartCard}>
                {image ? <div><img className={styles.preview} src={image} alt={"demo"} /> </div> : <div>Zk</div>}
            </div>
            <div className={styles.videoDesPart}>
                {avatar}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <p className={styles.videoTitle}>
                        {title}
                    </p>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <p className={styles.videoDetail}>
                            {channelName}
                        </p>
                        <p className={styles.videoDetail}>
                            {viewsCount} zhlednutí - před {timeFromUpload}
                        </p>
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
            <div className={styles.videoPartCard}>
                <div className={styles.videoPartCard}>
                    {image ? <div><img className={styles.preview} src={image} alt={"demo"} /> </div> : <div>Zk</div>}
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <p className={styles.videoHistoryTitle}>{title}</p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className={styles.videoHistoryDetail}>{channelName}</p> <p className={styles.videoHistoryDetail}>{viewsCount} zhlednutí</p>
                </div>
            </div>
        </section>
    )
}