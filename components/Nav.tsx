import { BuiltInProviderType } from "next-auth/providers/index";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartDrawer from "./CartDrawer";

export default function Nav() {
    const [providers, setProviders] = useState<null | Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>>(null);
    // const router = useRouter();
    const { data: session } = useSession();
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

    console.log('session', session)

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    }, [])

    return (
        <nav className="w-full mx-auto flex justify-between items-center px-20 py-6 bg-slate-950">
            <Link href="/" className="text-lg font-semibold text-emerald-700">
                Aws Exam Topics
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
                    <button
                        type="button"
                        onClick={() => signOut()}
                        className="w-20 h-8 border border-1 border-black-400 rounded-md hover:bg-emerald-700 text-white cursor-pointer">Sign Out</button>
                    <CartDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} user={session?.user} showIcon={true} />
                </div>
            ) : <div>
                {!toggleDropdown && <button
                    className="w-20 h-8 border border-1 border-white rounded-md hover:bg-emerald-700 text-white cursor-pointer"
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
                                className="w-20 h-8 border border-1 border-white rounded-md hover:bg-emerald-700 text-white cursor-pointer">
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