'use client'

import useCart from '@/hooks/useCart';
import { UserType } from '@/model/User';
import * as Dialog from '@radix-ui/react-dialog';
import { MoveRight, ShoppingCart, Trash2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

type SessionUser = Omit<UserType, '_id' | 'password'>

type CartDrawerProps = {
    drawerOpen: boolean;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    showIcon: boolean;
}

export default function CartDrawer({ drawerOpen, setDrawerOpen, showIcon }: CartDrawerProps) {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { cartList, removeItem } = useCart();

    const safeCartList = Array.isArray(cartList) ? cartList : [];

    return (
        <Dialog.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
            {/* Trigger Button */}
            <Dialog.Trigger >
                {showIcon ?
                    (<ShoppingCart className="w-5 h-5 text-white" />)
                    : ''
                }

            </Dialog.Trigger>

            {/* Drawer Overlay */}
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />

                {/* Drawer Content */}
                <Dialog.Content
                    className="realitive fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform transition-transform"
                >

                    {/* Close Button */}

                    {/* Drawer Content */}
                    <Dialog.DialogTitle className='hidden'></Dialog.DialogTitle>
                    <div className='w-full h-12 p-4 flex gap-12 bg-emerald-500'>
                        <Dialog.Close>
                            <div className='w-8 h-6 flex justify-center items-center rounded-lg hover:bg-emerald-400 cursor-pointer'>
                                <MoveRight className="w-5 h-5" />
                            </div>
                        </Dialog.Close>
                        <div className='flex gap-4'>
                            <ShoppingCart />
                            Shoping Cart
                        </div>
                    </div>
                    <div className='mt-8 flex flex-col gap-2 overflow-hidden'>
                        {safeCartList.length ? (safeCartList.map(item => (
                            <div key={`${item.handle}-${item.description}`} className='w-11/12 mx-auto flex gap-2 p-4 border border-solid border-slate-300 rounded-lg'>
                                <div>
                                    <Image src={item.image} alt={item.name} width={100} height={40} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex gap-6'>
                                        <h2>{item.name}</h2>
                                        <Trash2 className="w-5 h-5 cursor-pointer" onClick={() => { removeItem(item._id) }} />
                                    </div>
                                    <div>$ {item.price}</div>
                                </div>
                            </div>
                        ))) : <p className='mx-auto'>Your cart is empty.</p>
                        }
                    </div>
                    <div className='absolute bottom-0 w-full pb-8 bg-neutral-300'>
                        <div className='px-12 py-4 flex justify-between text-xl'>
                            <p className=''>Total</p>
                            {
                                safeCartList.length ? (
                                    <p> $ {cartList.reduce((acc, cur) => acc + Number(cur.price), 0).toFixed(2)} </p>
                                )
                                    : (<p>$ 0.00</p>)}
                        </div>
                        <div className='flex justify-center'>
                            <button className='w-3/4 h-[40px] bg-emerald-700 text-white rounded-lg'>
                                View Cart
                            </button>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}