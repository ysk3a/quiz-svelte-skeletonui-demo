<script lang="ts">
	import QuestionButton from './components/QuestionButton.svelte';
	import QuestionOption from './components/QuestionOption.svelte';
	import QuestionText from './components/QuestionText.svelte';
	import { answers, type Answer } from '../../../store';
	import { goto } from '$app/navigation';
	import QuestionProgressCircle from './components/QuestionProgressCircle.svelte';
	import { onMount } from 'svelte';

	export let data: any = null;

	// track state of question:
	let currentQuestionIndex: number = 0;
	let answersValue: Answer[];
	let selectedOption: null | string = null; // from the options object
	let showCorrectAnswer = false;

	const handleChangeOption = (label: string) => {
		selectedOption = label;
	};

	const handleNext = () => {
		showCorrectAnswer = false;
		selectedOption = null;
		if (currentQuestionIndex === data.questions.length - 1) {
			goto('/results');
		} else {
			currentQuestionIndex++;
		}
	};

	const handleSubmit = () => {
		if (!selectedOption) return;
		showCorrectAnswer = true;
		// update global store
		answers.update((currentState) => {
			const updatedAnswerState = currentState;
			console.log('::answers.update', currentState, selectedOption, question);
			updatedAnswerState[currentQuestionIndex].isCorrect = selectedOption === question.answer;
			return updatedAnswerState;
		});
	};

	answers.subscribe((value) => {
		// why called so many times?
		console.log('::answers.Subscribe', value);
		answersValue = value;
	});

	$: question = data.questions[currentQuestionIndex];

	onMount(() => {
		answers.set(
			data.questions.map((question: any) => {
				return {
					id: question.id,
					isCorrect: null
				};
			})
		);
	});
</script>

<div class="quiz-card p-4 shadow-lg shadow-blue-500/50 hover:shadow-indigo-500/50 w-[250px] rounded overflow-hidden cursor-pointer m-2">
	<h1>{data.name}</h1>
</div>

<div class="w-full">
	<div class="flex justify-center">
		{#each answersValue as answer}
			<QuestionProgressCircle isCorrect={answer.isCorrect} />
		{/each}
	</div>
	<QuestionText text={question.question} />
	<div class="flex justify-between flex-wrap cursor-pointer">
		{#each question.options as option (option.id)}
			<QuestionOption {option} {selectedOption} {handleChangeOption} {showCorrectAnswer} answer={question.answer} />
		{/each}
	</div>
	<QuestionButton {handleSubmit} {showCorrectAnswer} {handleNext} />
</div>
