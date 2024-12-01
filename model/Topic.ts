import { Schema, models, model } from "mongoose";

const QuestionSchema = new Schema({
	questionContent: {
		type: String,
		required: true,
	},
	questionImage: {
		type: String,
		required: false,
	},
});

const OptionSchema = new Schema({
	optionContent: {
		type: String,
		required: true,
	},
	optionImage: {
		type: String,
		required: false,
	},
});

const TopicSchema = new Schema({
	topicId: {
		type: String,
		required: true,
	},
	question: QuestionSchema,
	options: {
		type: Map,
		of: OptionSchema,
	},
	correctAnswers: {
		type: [String],
		required: true,
	},
});

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
	question: Question; 
	options: Options;
	correctAnswers: string[];
};

const Topic = models.Topic || model("Topic", TopicSchema);
export default Topic;