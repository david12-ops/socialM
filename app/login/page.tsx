"use client"
import dynamic from "next/dynamic";

const FormLogin = dynamic(() => import('../components/authentication/login'), { ssr: false });

export default function LoginPage() {
    return <FormLogin />;
}
