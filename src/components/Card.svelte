<script lang="ts">
	import * as images from '../image';
	import { goto } from '$app/navigation';
	// accept parent to child data communication

	interface Quiz4 {
		id: number;
		name: string;
		imageUrl: string;
		questions: Question[];
	}

	interface Question {
		id: number;
		question: string;
		options: Option[];
		answer: string;
	}

	interface Option {
		id: number;
		label: string;
		text: string;
	}

	// type Quiz2 = { id: number; name: string; imageUrl: string; questions: { id: number; text: string; options: { id: number; label: string; text: string; }[]; answer: string; }[]; }
	export let quiz: Quiz4;

	const access = (str: string) => {
		return images[str as keyof typeof images];
	};
</script>

<button on:click={() => goto(`/quiz/${quiz.id}`)} class="quiz-card shadow-lg shadow-blue-500/50 hover:shadow-indigo-500/50 w-[250px] rounded overflow-hidden cursor-pointer m-2">
	<!-- <img src={images[quiz.imageUrl]} alt="chemistry" class="h-44" /> -->
	<img src={access(quiz.imageUrl)} alt="chemistry" class="h-44" />
	<div class="flex item-center justify-between py-3 px-2">
		<h1 class="font-bold">{quiz.name}</h1>
		<p>{quiz.questions.length} questions</p>
	</div>
</button>
