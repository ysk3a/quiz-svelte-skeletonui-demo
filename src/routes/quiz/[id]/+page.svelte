<script lang="ts">
	import QuestionButton from './components/QuestionButton.svelte';
	import QuestionOption from './components/QuestionOption.svelte';
	import QuestionText from './components/QuestionText.svelte';
	import { answers, type Answer } from '../../../store';
	import { goto } from '$app/navigation';
	import QuestionProgressCircle from './components/QuestionProgressCircle.svelte';
	import { onDestroy, onMount } from 'svelte';

	export let data: any = null;

	// track state of question:
	let currentQuestionIndex: number = 0;
	// let answersValue: Answer[];
	let selectedOption: null | string = null; // from the options object
	let showCorrectAnswer = false;

	const handleChangeOption = (label: string) => {
		selectedOption = label;
	};

	const handleNext = () => {
		showCorrectAnswer = false;
		selectedOption = null;
		console.log('::handleNext', data, currentQuestionIndex, currentQuestionIndex === data.questions.length - 1);
		if (currentQuestionIndex === data.questions.length - 1) {
			goto('/results');
		} else {
			currentQuestionIndex++;
		}
		console.log('::handleNext end', data, currentQuestionIndex, currentQuestionIndex === data.questions.length - 1);
	};

	const handleSubmit = () => {
		if (!selectedOption) return;
		showCorrectAnswer = true;
		// update global store

		// answers.update((currentState) => {
		// 	const updatedAnswerState = currentState;
		// 	console.log('::answers.update', currentState, selectedOption, question);
		// 	updatedAnswerState[currentQuestionIndex].isCorrect = selectedOption === question.answer;
		// 	return updatedAnswerState;
		// });
		console.log('::answers.update before', $answers, selectedOption, question);
		$answers[currentQuestionIndex].isCorrect = selectedOption === question.answer;
		console.log('::answers.update after', $answers, selectedOption, question);
	};

	// answersValue = $answers;
	// const unsubscribe = answers.subscribe((value) => {
	// 	// why called so many times?
	// 	console.log('::answers.Subscribe', value);
	// 	answersValue = value;
	// });

	// onDestroy(unsubscribe);

	$: question = data.questions[currentQuestionIndex];

	onMount(() => {
		$answers = data.questions.map((question: any) => {
			return {
				id: question.id,
				isCorrect: null
			};
		});

		// answers.set(
		// 	data.questions.map((question: any) => {
		// 		return {
		// 			id: question.id,
		// 			isCorrect: null
		// 		};
		// 	})
		// );
	});
</script>

<div class="w-full">
	<span class="badge variant-filled">
		<span class="h1 bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">{data.name}</span>
	</span>

	<div class="flex justify-center">
		{#each $answers as answer}
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
