import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function ActicationForm() {
    const [activationValue, setActivationValue] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState(false);

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

            if (response.ok) {
                setSuccess(true);
                setError('');
            } else {
                setError(data.message || 'Activation failed.');
                setSuccess(false);
            }
        } catch (err) {
            setError('Network error. Please try again.');
            setSuccess(false);
        }
    }

    return (
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

            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">Product activated successfully!</div>}
        </form>

    )
}