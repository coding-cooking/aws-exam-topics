'use client'

import TopicsContext, { TopicType } from "@/context/TopicsContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { BotMessageSquare } from 'lucide-react';

type TopicTemplateProps = {
    topic: TopicType;
}

export default function TopicTemplate({ topic }: TopicTemplateProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const topics: TopicType[] = useContext(TopicsContext);


    const handleClick = (e: React.FormEvent, option: string) => {
        e.preventDefault();
        if (topic.correctAnswers.length > 1) {
            setSelectedOptions((prevOptions) => {
                if (prevOptions.includes(option)) {
                    return prevOptions.filter((opt) => opt !== option);
                } else {
                    return [...prevOptions, option];
                }
            })
        } else {
            setSelectedOptions([option])
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true)
    }

    function getOptionClass(key: string) {
        let baseClass = "block flex gap-2 my-2 p-3 cursor-pointer";

        if (topic.correctAnswers.length === 1) {
            if (selectedOptions[0] === key) {
                if (topic.correctAnswers.includes(key)) {
                    baseClass += " bg-emerald-400 text-slate-950";
                } else {
                    baseClass += " bg-red-300 text-slate-950";
                }
            } else {
                baseClass += " hover:bg-sky-400 hover:text-slate-950";
            }
        } else if (topic.correctAnswers.length > 1) {
            if (submitted) {
                baseClass += topic.correctAnswers.includes(key)
                    ? " bg-emerald-400 text-slate-950"
                    : selectedOptions.includes(key)
                        ? " bg-red-300 text-slate-950"
                        : ""; // 
            } else if (selectedOptions.includes(key)) {
                baseClass += " text-slate-950 bg-sky-400";
            }
        }
        return baseClass;
    };

    return (
        <div className="w-full h-full flex justify-center items-center">
            {Number(topic.topicId) > 1 && (
                <Link href={`/topic/${topic.topicType}/${Number(topic.topicId) - 1}`} className="md:p-3 hover:bg-teal-200 hover:bg-contain">
                    <Image src='/prevIcon.svg' alt='prev one' width={60} height={60} />
                </Link>)}

            <div className="w-4/5 md:w-3/5 h-screen flex flex-col items-start mx-auto my-4">
                <p className="text-lg">Question {topic.topicId}</p>
                <p className="my-4">{topic.question.questionContent}</p>
                {topic.question.questionImage &&
                    (<Image src={topic.question.questionImage} alt={'question image'} width={600} height={400} />)}
                <form onSubmit={handleSubmit}>
                    {
                        Object.entries(topic.options).map(([key, value]) =>
                            <label
                                key={`${key}-${value}`}
                                className={getOptionClass(key)}
                                onClick={(e) => { handleClick(e, key) }}
                            >
                                <input type={topic.correctAnswers.length > 1 ? 'checkbox' : 'radio'}
                                    name={topic.correctAnswers.length > 1 ? 'options[]' : 'options'}
                                    value={key}
                                    className="hidden"
                                />
                                <div>{key}.</div>
                                <div>
                                    {value.optionContent}
                                    {value.optionImage && (
                                        <Image src={value.optionImage} alt="option image" width={600} height={400} />
                                    )}
                                </div>
                            </label>
                        )
                    }
                    {topic.correctAnswers.length > 1 && (
                        <button type="submit" className="block mx-auto my-4 bg-blue-500 text-white px-4 py-2 rounded">
                            Submit
                        </button>
                    )}
                </form>
            </div >
            {(Number(topic.topicId) !== topics.length) && (
                <Link href={`/topic/${topic.topicType}/${Number(topic.topicId) + 1}`} className="md:p-3 hover:bg-teal-200 hover:bg-contain">
                    <Image src='/nextIcon.svg' alt='next one' width={60} height={60} />
                </Link>)}

            <div>
                <BotMessageSquare className="w-6 h-6" />
            </div>

        </div >

    )
}