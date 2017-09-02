import axios from 'axios';

const instance = axios.create({baseURL: 'https://api.github.com'});

export const getLanguages = async (owner, repo) => {
  const res = await instance.get(`repos/${owner}/${repo}/languages`);
  return res.data;
};


export const getTopic = async (topic) => {
  const res = await instance.get('search/repositories', {params: {q: topic}});
  return res.data;
};
