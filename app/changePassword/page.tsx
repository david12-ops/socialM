"use client"
import dynamic from "next/dynamic";

const FormChangePass = dynamic(() => import('../components/authentication/change-pass'), { ssr: false });

export default function LoginPage() {
    return <FormChangePass />;
}
