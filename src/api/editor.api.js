import { apiFetch } from './client';

export const executeCode = (code) =>
  apiFetch('/execute', {
    method: 'POST',
    body: JSON.stringify({ code }),
  });

export const generateQuiz = (topic, difficulty = 2) =>
  apiFetch('/quiz', {
    method: 'POST',
    body: JSON.stringify({ topic_name: topic, difficulty }),
  });
