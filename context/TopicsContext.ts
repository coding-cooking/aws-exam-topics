import { createContext } from "react";

type Question = {
    questionContent: string;
    questionImage?: string;
};

type Option = {
    optionContent: string;
    optionImage?: string;
};

type Options = Record<string, Option>;

export type TopicType = {
    _id: string;
    topicId: string;
    topicType: string;
    question: Question;
    options: Options;
    correctAnswers: string[];
};

const TopicsContext = createContext<TopicType[]>([]);
export default TopicsContext;