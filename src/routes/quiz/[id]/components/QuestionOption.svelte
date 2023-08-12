<script lang="ts">
	export let option: { label: string; text: string };
	// cannot change state of a variable from child components. only where variale was declared first.
	// but you can pass a function as options/props to the child component to make changes to the value in the owner component.
	export let selectedOption: null | string;
	export let handleChangeOption: (label: string) => void;
	export let showCorrectAnswer: boolean;
	export let answer: string;
</script>

<button
	on:click={() => handleChangeOption(option.label)}
	type="button"
	class={`btn rounded w-[49%] text-center p-2 mb-4 py-5 
    ${option.label === selectedOption ? 'variant-filled-primary' : 'variant-filled'} 
    ${showCorrectAnswer && (answer === option.label ? 'variant-filled-success' : 'variant-filled-error')}`}
>
	{option.text}
	<!-- boolean && (string) ??? why? -->
</button>

<!-- 
    try: 
    if correctly selected show solid green and all incorrect show border-red not solid red.
    if incorrect, correct btn is border green and selected incorrect is solid red and unselected incorrect is border-red
    
    to learn: protected routes
-->
