import Link from 'next/link'
import styles from '../styles/component.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <section className={styles.footerSection}>
                    <h2>About</h2>
                    <p>
                        socialM is a popular video-sharing platform where users can upload, view, and share videos. It has grown over the years to become one of the most visited websites globally, with billions of users interacting with videos on a daily basis.
                    </p>
                </section>

                <section className={styles.footerSection}>
                    <h2>Quick Links</h2>
                    <ul>
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Trending
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Subscriptions
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Privacy
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className={styles.footerSection}>
                    <h2>Follow Us</h2>
                    <ul className="social-links">
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
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; socialM. All rights reserved.</p>
            </div>
        </div>
    )
}
