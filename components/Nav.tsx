import { BuiltInProviderType } from "next-auth/providers/index";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
    const [providers, setProviders] = useState<null | Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>>(null);
    const router = useRouter();

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    }, [])

    return (
        <nav className="w-4/5 mx-auto flex justify-between items-center py-6">
            <Link href="/" className="text-lg font-semibold text-sky-800">
                {/* <Image
                    src="/logo.png"
                    alt="SuperPrompt Logo"
                    width={120}
                    height={30}
                    className="object-contain"
                /> */}
                Aws Exam Topics
            </Link>
            <Link href='/saa'>
                SAA
            </Link>
            {providers && Object.values(providers).map((provider) => (
                <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="w-20 h-8 border border-1 border-black-400 rounded-md hover:bg-sky-400 hover:text-slate-100">
                    {`${provider.name}`}
                </button>
            ))}


        </nav>
    )
}