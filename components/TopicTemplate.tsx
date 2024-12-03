'use client'

import { TopicType } from "@/model/Topic";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type TopicTemplateProps = {
    topic: TopicType;
}
export default function TopicTemplate({ topic }: TopicTemplateProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    useEffect(() => {
        console.log('selectedOptions:', selectedOptions);
    }, [selectedOptions]);

    const handleClick = useCallback((option: string) => {
        if (topic.correctAnswers.length > 1) {
            setSelectedOptions((prevOptions) => {
                if (prevOptions.includes(option)) {
                    console.log('haha')
                    return prevOptions.filter((opt) => opt !== option);
                } else {
                    console.log('hehe')
                    return [...prevOptions, option];
                }
            })
        } else {
            setSelectedOptions([option])
        }
    }, [topic.correctAnswers.length])

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();


    }


    return (
        <div className="w-3/5 h-screen flex flex-col items-center mx-auto my-4">
            <p className="my-4">{topic.question.questionContent}</p>
            {topic.question.questionImage && (<Image src={topic.question.questionImage} alt={'question image'} width={100} height={100} />)}
            <form onSubmit={handleSubmit}>
                {
                    Object.entries(topic.options).map(([key, value]) =>
                        <label
                            key={`${key}-${value}`}
                            className={`block flex gap-2 my-2 p-3 cursor-pointer
                            ${selectedOptions.includes(key) ? 'bg-blue-200' : 'hover:bg-blue-100'}
                            ${selectedOptions.length === 1 &&
                                    selectedOptions[0] === key &&
                                    topic.correctAnswers.includes(key)
                                    ? 'bg-emerald-400 text-slate-100'
                                    : selectedOptions.length === 1 &&
                                        selectedOptions[0] !== key &&
                                        topic.correctAnswers.includes(key)
                                        ? 'bg-emerald-400 text-slate-100'
                                        : selectedOptions.length === 1 &&
                                            selectedOptions[0] == key &&
                                            !topic.correctAnswers.includes(key)
                                            ? 'bg-red-300 text-slate-100'
                                            : ''
                                }
                            `}
                            onClick={() => { handleClick(key) }}
                        >
                            <input type={topic.correctAnswers.length > 1 ? 'checkbox' : 'radio'}
                                name={topic.correctAnswers.length > 1 ? 'options[]' : 'options'}
                                value={key}
                            // className="hidden"
                            />
                            <div>{key}.</div>
                            <div>
                                {value.optionContent}
                                {value.optionImage && (
                                    <Image src={value.optionImage} alt="option image" width={100} height={100} />
                                )}
                            </div>
                        </label>
                    )
                }
            </form>
            {topic.correctAnswers.length > 1 && (
                <button type="submit" className="my-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            )}
        </div >
    )
}