import { BuiltInProviderType } from "next-auth/providers/index";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
    const [providers, setProviders] = useState<null | Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>>(null);
    const router = useRouter();
    const { data: session } = useSession();
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

    console.log('session', session)

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

            {session?.user?.image ? (
                <div className="flex gap-10">
                    <Link href="/">
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                        />
                    </Link>
                    <button type="button" onClick={(event: React.MouseEvent<HTMLButtonElement>) => signOut()} className="w-20 h-8 border border-1 border-black-400 rounded-md hover:bg-sky-400 hover:text-slate-100 cursor-pointer">Sign Out</button>
                </div>
            ) : <div>
                {!toggleDropdown && <button
                    className="w-20 h-8 border border-1 border-black-400 rounded-md hover:bg-sky-400 hover:text-slate-100 cursor-pointer"
                    onClick={() => setToggleDropdown((prev) => !prev)}>
                    Sign In
                </button>}
                {toggleDropdown && providers && <div className="flex flex-col md:flex-row gap-10">
                    {
                        (providers && Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="w-20 h-8 border border-1 border-black-400 rounded-md hover:bg-sky-400 hover:text-slate-100 cursor-pointer">
                                {`${provider.name}`}
                            </button>
                        )))
                    }
                </div>}
            </div>
            }
        </nav>
    )
}