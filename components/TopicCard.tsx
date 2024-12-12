import { products } from "@/data/products";
import Image from "next/image";

export default function TopicCard() {
    return (
        <div className="w-full h-full flex gap-20 justify-center">
            {products.map(product => (
                <div key={product.name} className="w-[360px] h-[300px] flex flex-col border border-1 border-slate-500 rounded-xl overflow-hidden">
                    <Image src={product.image} alt={product.name} width={360} height={240} className="object-cover" />
                    <div className="flex gap-10 pt-4 px-6 items-center">
                        <div className="w-2/3">
                            <h3 className="text-lg text-sky-700">{product.name}</h3>
                            <p className="text-sm text-slate-500">{product.description}</p>
                        </div>
                        <div>
                            <button className="w-[60px] h-[40px] bg-blue-800 hover:bg-blue-600 rounded-xl text-white hover:">Buy</button>
                        </div>
                    </div>

                </div>
            ))}


        </div>
    )
}