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
	id: {
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

type QuestionData = {
	id: string; 
	question: Question; 
	options: Options;
	correctAnswers: string[];
};
