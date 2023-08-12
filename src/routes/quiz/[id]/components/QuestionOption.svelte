<script lang="ts">
	export let option: { label: string; text: string };
	// cannot change state of a variable from child components. only where variale was declared first.
	// but you can pass a function as options/props to the child component to make changes to the value in the owner component.
	export let selectedOption: null | string;
	export let handleChangeOption: (label: string) => void;
	export let showCorrectAnswer: boolean;
	export let answer: string;

	$: userSelected = option.label === selectedOption; // tailwind class ordering overriding?
	$: userIncorrectSelected = answer !== option.label && showCorrectAnswer && option.label === selectedOption;
	$: unselectedIncorrectOption = answer !== option.label && showCorrectAnswer && option.label !== selectedOption;
	$: userSelectedCorrectly = answer === option.label && showCorrectAnswer && option.label === selectedOption;
	$: highlightCorrectOption = answer === option.label && showCorrectAnswer && option.label !== selectedOption;
</script>

<button
	disabled={showCorrectAnswer}
	class="btn rounded w-[49%] text-center p-2 mb-4 py-5"
	class:variant-filled={!showCorrectAnswer}
	class:variant-filled-primary={userSelected}
	class:variant-filled-warning={userIncorrectSelected}
	class:variant-ghost-error={unselectedIncorrectOption}
	class:variant-filled-success={userSelectedCorrectly}
	class:variant-ghost-success={highlightCorrectOption}
	on:click={() => handleChangeOption(option.label)}
>
	{option.text}
	{answer === option.label}
	{showCorrectAnswer}
	{option.label === selectedOption}
</button>

<!-- <button
	class={`btn  variant-filled rounded w-[49%] text-center p-2 mb-4 py-5 
	${option.label === selectedOption ? 'variant-filled-warning' : null} 
	${showCorrectAnswer && (answer === option.label ? 'variant-filled-success' : 'bg-red-300')}`}
	on:click={() => handleChangeOption(option.label)}
>
	{option.text}
</button> -->

<!-- boolean && (string) ??? why? -->

<!-- 
	issue: tailwind in skeletondev precedence need to understand. or better conditional classes

    to learn: protected routes
-->
