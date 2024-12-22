import { productType } from "@/data/products";
import { CartItemType } from "@/model/User";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useCart() {
    const { data: session } = useSession();
    const [cartList, setCartList] = useState<CartItemType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [adding, setAdding] = useState<boolean>(false)
    // const [error, setError] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

    async function updateCart() {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
                method: 'GET',
            })
            const updatedCart = await response.json();
            const safeCartList = Array.isArray(updatedCart) ? updatedCart : [];
            setCartList(safeCartList);
        } catch (error) {
            console.error('Error fetching cart:', error);
            // setError(error);
            setCartList([]);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleAddToCart(product: productType) {
        if (!session) {
            console.log("User is not authenticated");
            return;
        }
        setAdding(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.user.accessToken}`,
                },
                body: JSON.stringify({ product })
            })

            if(response.ok){
                await updateCart(); 
                console.log('Item added successfully');
                setDrawerOpen(true);
            } else {
                console.error('Failed to add item:', await response.text());
            }
        } catch (error) {
            console.error('Network error:', error);
        } finally {
            setAdding(false);
        }
    }

    async function removeItem(id: string) {
        if (!session) {
            console.log("aaaa User is not authenticated");
            return;
        }
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/edit`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.user.accessToken}`,
                },
                body: JSON.stringify({ id })
            })
            if (response.ok) {
                await updateCart();
                console.log('Item removed successfully');
            } else {
                console.error('Failed to remove item:', await response.text());
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    }

    useEffect(() => {
        if (session) {
            updateCart();
        }
    }, [session]);

    return { cartList, isLoading, handleAddToCart, removeItem, adding, drawerOpen, setDrawerOpen };

}