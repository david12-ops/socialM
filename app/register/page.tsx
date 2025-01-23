"use client"
import dynamic from "next/dynamic";

const RegisterForm = dynamic(() => import('../components/authentication/register'), { ssr: false });

export default function RegisterPage() {
    return <RegisterForm />;
}
