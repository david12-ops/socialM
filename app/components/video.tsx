import styles from "../styles/component.module.css"

export default function Video(params: { avatar: JSX.Element, title: string, channelName: string, viewsCount: string, timeFromUpload: string, image: string | undefined }) {
    const { avatar, channelName, viewsCount, title, timeFromUpload, image } = params

    return (
        <div className={styles.videoCard}>
            <div className={styles.videoPartCard}>
                <img className={styles.preview} src={image} alt="preview" />
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
        </div>
    )
}