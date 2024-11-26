'use client';

import { useHookstate } from '@hookstate/core';
import Image from 'next/image';
// import styles from './Home.module.css';
import { useState } from 'react';

import { useSuppDataQuery } from '@/generated/graphql';

// eslint-disable-next-line import/no-default-export
export default function Home() {

    const supp = useSuppDataQuery();

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <main>
                <div
                    style={{
                        maxWidth: '400px',
                        border: '5px solid #D7E8F6',
                        borderRadius: '5px',
                        padding: '15px',
                        background: '#F3F4E7',
                    }}
                >

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <a
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="https://nextjs.org/icons/vercel.svg"
                                alt="Vercel logomark"
                                width={20}
                                height={20}
                            />
                            Deploy now
                        </a>
                        <a
                            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read our docs
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}