import ProductInfoTemplate from "@/components/ProductInfoTemplate";
import { products, productType } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductInfoPage({ params }: { params: { handle: string } }) {
    const { handle } = await params;
    try {
        const response: productType | undefined = products.find(product => product.handle === handle);

        if (response === undefined) {
            return notFound();
        } else {
            const product = response;
            return <ProductInfoTemplate product={product} />
        }
    } catch (error) {
        console.error("Error fetching topic:", error);
        return notFound();
    }
}