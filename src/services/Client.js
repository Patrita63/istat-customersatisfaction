import * as axios from 'axios';

import { ClientAPI } from '../config/config';

const sendResult = async function (result) {
    try {
        const response = await axios.post(`${ClientAPI}/surveyApi/sendResult`, result);
        return response;
    }
    catch (error) {
        console.log(error.response);
        return error.response;
    }
}

const getSurvey = async function (surveyId) {
    try {
        /* eslint-disable no-debugger */
        debugger;
        // PATRIZIO 'https://localhost:7277/SurveyApi/3FA85F64-5717-4562-B3FC-2C963F66AFA1'
		const urlSurvey = `${ClientAPI}/surveyApi/${surveyId}`;
        console.log(urlSurvey);

        const response = await axios.get(urlSurvey);
        return response;
    } catch (error) {
        console.log(error);
        return error.response;
    }
}

export const clientService = {
    sendResult,
    getSurvey
}