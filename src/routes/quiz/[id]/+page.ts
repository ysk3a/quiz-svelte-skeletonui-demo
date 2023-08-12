import { error } from '@sveltejs/kit';
import quizzes from '../../../data.json';

// function `load` which is called as soon as this page is renderered and load data we return from this function into the page.svelte.

// we want to find 'that' particular quiz by getting the url
export function load({params} : {params: {id: string}}) {
    // parseInt since getting properties from params/url is a string.
    const quiz = quizzes.find((quiz) => quiz.id === parseInt(params.id))

    // case when user enters in url some path that does not exist:
    if(!quiz) {
        throw error(404, 'Quiz not found');
    }
    return quiz;

}
// export const load: PageLoad = async () => {
    
// };