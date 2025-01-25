import Link from 'next/link'
import styles from '../styles/component.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <section className={styles.footerSection}>
                    <h2>O nás</h2>
                    <p>
                        socialM je platforma pro sdílení videí, kde mohou uživatelé nahrávat, prohlížet a sdílet videa. V průběhu let se rozrostla a stala se jednou z celosvětově nejnavštěvovanějších webových stránek s miliardami uživatelů, kteří denně interagují s videi.                    </p>
                </section>

                <section className={styles.footerSection}>
                    <h2>Rychlé odkazy</h2>
                    <ul>
                        <li>
                            <Link href="/">
                                Domů
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Trendy
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Odběry
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Soukromí
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className={styles.footerSection}>
                    <h2>Sleduj nás na</h2>
                    <ul className={styles.socialLinks}>
                        <li>
                            <Link href="https://www.facebook.com">
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.twitter.com">
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com">
                                Instagram
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className={styles.footerSection}>
                    <h2>Prohlédnout aktualizace</h2>
                    <ul>
                        <li>
                            <Link href="/updates">
                                Aktualizace a funkce
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; socialM. Všechna práva vyhrazena.</p>
            </div>
        </div>
    )
}
