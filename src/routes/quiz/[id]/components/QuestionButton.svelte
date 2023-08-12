<script lang="ts">
	export let handleSubmit: () => void;
	export let handleNext: () => void;
	export let showCorrectAnswer: boolean;
</script>

<div class="text-center">
	{#if showCorrectAnswer}
		<!-- content here -->
		<button on:click={handleNext} type="button" class="btn variant-filled-surface font-bold p-4 rounded px-16">Next</button>
	{:else}
		<button on:click={handleSubmit} type="button" class="btn variant-filled-surface font-bold p-4 rounded px-16">Submit</button>
	{/if}
</div>
