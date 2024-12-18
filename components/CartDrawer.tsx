import * as Dialog from '@radix-ui/react-dialog'; // shadcn uses radix-ui for components
import { MoveRight, ShoppingCart } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

type CartDrawerProps = {
    drawerOpen: boolean;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>
}

export default function CartDrawer({ drawerOpen, setDrawerOpen }: CartDrawerProps) {


    return (
        <Dialog.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
            {/* Trigger Button */}
            <Dialog.Trigger className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Open Drawer
            </Dialog.Trigger>

            {/* Drawer Overlay */}
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />

                {/* Drawer Content */}
                <Dialog.Content
                    className="fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform transition-transform"
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
                    <div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}