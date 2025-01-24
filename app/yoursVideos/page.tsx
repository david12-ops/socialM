"use client"
import styles from "../styles/yourVideos.module.css"

const Table = () => {
    return (
        <div>
            <table className={styles.videoTable}>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Video</th>
                        <th>Viditelnost</th>
                        <th>Omezení</th>
                        <th>Datum</th>
                        <th>Zhlédnutí</th>
                        <th>Komentáře</th>
                        <th>Líbí se (vs. Nelíbí se)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>
                            <div className={styles.videoInfo}>
                                <img className={styles.videoImg} src="/demoPreview.jpg" alt="preview" />
                                <div>
                                    <p>Cvičení - klíčové snímky v obraze a zvuku</p>
                                    <span>Přidat popis</span>
                                </div>
                            </div>
                        </td>
                        <td>Neveřejné</td>
                        <td>Určeno pro děti</td>
                        <td>30. 5. 2023</td>
                        <td>9</td>
                        <td>0</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>
                            <div className={styles.videoInfo}>
                                <img className={styles.videoImg} src="/demoPreview.jpg" alt="preview" />
                                <div>
                                    <p>PF Cvičení Chroma key green</p>
                                    <span>Přidat popis</span>
                                </div>
                            </div>
                        </td>
                        <td>Částečně zab...</td>
                        <td>Autorská práva</td>
                        <td>13. 3. 2023</td>
                        <td>4</td>
                        <td>0</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default function VideosPage() {
    return (
        <section>
            <h2 className={styles.title}>Obsah kanálu</h2>
            <Table />
        </section>
    )

}


