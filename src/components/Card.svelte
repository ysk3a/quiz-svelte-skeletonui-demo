<script lang="ts">
	import * as images from '../image';
	// accept parent to child data communication
	type TOptions = {
		id: number;
		label: string;
		text: string;
	};
	type TQuestion = {
		id: number;
		question: string;
		options: TOptions[];
		answer: string;
	};
	type TQuiz = {
		id: number;
		name: string;
		imageUrl: string;
		questions: TQuestion[];
	};
	type Quiz = {
		id: number;
		name: string;
		imageUrl: string;
		questions: {
			id: number;
			question: string;
			options: {
				id: number;
				label: string;
				text: string;
			}[];
			answer: string;
		}[];
	};
	// type Quiz2 = { id: number; name: string; imageUrl: string; questions: { id: number; text: string; options: { id: number; label: string; text: string; }[]; answer: string; }[]; }
	export let quiz: Quiz;

	const access = (str: string) => {
		return images[str as keyof typeof images];
	};
</script>

<div class="quiz-card shadow-lg shadow-blue-500/50 hover:shadow-indigo-500/50 w-[250px] rounded overflow-hidden cursor-pointer m-2">
	<img src={access(quiz.imageUrl)} alt="chemistry" class="h-44" />
	<div class="flex item-center justify-between py-3 px-2">
		<h1 class="font-bold">{quiz.name}</h1>
		<p>{quiz.questions.length} questions</p>
	</div>
</div>
