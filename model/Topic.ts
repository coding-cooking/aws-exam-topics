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
	topicType: {
		type: String,
		required: true,
		enum: ['saa', 'dop', 'sap'],
	},
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

const Topic = models.Topic || model("Topic", TopicSchema);
export default Topic;