import * as axios from 'axios';

import { SurveyAPI } from '../config/config';

const getSurvey = async function (surveyId) {
	try {
		// PATRIZIO 'https://localhost:7277/SurveyApi/3FA85F64-5717-4562-B3FC-2C963F66AFA1'
		const urlSurvey = `${SurveyAPI}/Survey/${surveyId}`;
		const response = await axios.get(urlSurvey);
		return response;
	} catch (error) {
		console.log(error);
		return error.response;
	}
}

export const surveyService = {
	getSurvey
}