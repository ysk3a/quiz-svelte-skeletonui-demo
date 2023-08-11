<script lang="ts">
	import quizzes from '../data.json';
	import Card from '../components/Card.svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	{#each quizzes as quiz (quiz.id)}
		<Card {quiz} />
	{/each}
</div>

<!-- https://youtu.be/o6VwbXSjM08?t=8352 -->
