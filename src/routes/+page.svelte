<script lang="ts">
	import quizzes from '../data.json';
	// import * as images from '../image';
	import Card from '../components/Card.svelte';
	// const access = (str: string) => {
	// 	return images[str as keyof typeof images];
	// };
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	{#each quizzes as quiz (quiz.id)}
		<Card {quiz} />
		<!-- <div class="quiz-card shadow-lg shadow-blue-500/50 hover:shadow-indigo-500/50 w-[250px] rounded overflow-hidden cursor-pointer m-2">
			<img src={access(quiz.imageUrl)} alt="chemistry" class="h-44" />
			<div class="flex item-center justify-between py-3 px-2">
				<h1 class="font-bold">{quiz.name}</h1>
				<p>{quiz.questions.length} questions</p>
			</div>
		</div> -->
	{/each}
</div>
