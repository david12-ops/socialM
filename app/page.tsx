"use client"
import Image from "next/image";
// import styles from './Home.module.css';
import { useCallback, useState } from "react";
import { fetchData } from "./utility/httpUtils";
import { Form } from "./components/form"
import { useHookstate } from '@hookstate/core';
import { useQuery } from "@apollo/client";
import { GET_SUPP } from '../graphql/queries'

//vymyslet errory pro textfields a select componentu

export default function Home() {

    const [data, setData] = useState<JSX.Element>();
    const [error, setError] = useState<JSX.Element>();
    const supp = useQuery(GET_SUPP)

    const setFormData = useHookstate({
        name: '', newName: '', like: 0, photos: 0, subs: 0, operation: ''
    });

    if (supp.loading) {
        console.warn("cekej")
    } else {
        console.warn(supp.data.suplierData)
    }


    const handleSubmition = useCallback(async (e: React.FormEvent) => {
        e.preventDefault()
        if (!["DELETE", "CREATE", "GET", "UPDATE"].includes(setFormData.operation.get())) {
            setError(<div>Select only from allowed operations</div>)
        } else {
            setError(undefined)
            const updatedData = await fetchData(setFormData.operation.get() as "DELETE" | "CREATE" | "GET" | "UPDATE", { name: setFormData.name.get(), nameNew: setFormData.newName.get(), likes: setFormData.like.get(), photos: setFormData.photos.get(), subscribers: setFormData.subs.get() });
            setData(updatedData)
        }
    }, [setFormData]);


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <main>
                <div style={{ maxWidth: "400px", border: "5px solid #D7E8F6", borderRadius: "5px", padding: "15px", background: "#F3F4E7" }}>
                    {error ? error : data}
                    <Form setter={setFormData} submitFunc={handleSubmition} setterData={setData} setterErr={setError} />
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
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
