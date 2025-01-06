import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ActicationForm() {
    const [activationValue, setActivationValue] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState(false);
    const router = useRouter()

    async function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        try {
            const response = await fetch('/api/activate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ activationValue }),
            });

            const data = await response.json();

            console.log('data.data is', data.data);

            let productRoute;

            switch (data.data) {
                case ('SAA-C03'):
                    productRoute = 'saa';
                    break
                case ('DOP-C02'):
                    productRoute = 'dop';
                    break
                case ('SAP-C02'):
                    productRoute = 'sap';
                    break
            }

            console.log('productRoute is', productRoute);

            if (response.ok) {
                setSuccess(true);
                setError('');
                router.push(`/topic/${productRoute}`)
            } else {
                setError(data.message || 'Activation failed.');
                setSuccess(false);
            }
        } catch (err) {
            console.log(err)
            setError('Network error. Please try again.');
            setSuccess(false);
        }
    }

    return (
        <>
            <form
                className="mt-4 flex flex-col md:flex-row justify-center items-center gap-8"
                onSubmit={handleSubmit}
            >
                <Input type="text"
                    placeholder="Activation Code"
                    className="w-64 h-12"
                    value={activationValue}
                    onChange={(e) => setActivationValue(e.target.value)}

                />
                <Button
                    variant="destructive"
                    className="w-40 h-12 bg-emerald-700 rounded-xl"
                >Activate the product</Button>
            </form>
            {error && <div className="text-red-500 mt-8">{error}</div>}
            {success &&
                <div className="text-green-500 mt-8">Product activated successfully!</div>
                //also need the button to the product
            }
        </>


    )
}