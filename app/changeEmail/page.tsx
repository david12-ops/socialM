"use client"
import dynamic from "next/dynamic";

const FormChangeEm = dynamic(() => import('../components/authentication/change-email'), { ssr: false });

export default function LoginPage() {
    return <FormChangeEm />;
}
