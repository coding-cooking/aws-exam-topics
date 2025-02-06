import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export default async function POST(req: Request) {
    const { messages } = await req.json();

    const stream = await openai.beta.chat.completions.stream({
        model: 'gpt-4',
        // stream: true,
        messages: messages,
    });

    return stream.toDataStreamResponse();
}