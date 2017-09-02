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


export const getUser = async (name) => {
  const res = await instance.get(`users/${name}`);
  return res.data;
};


export const getReposOfUser = async (name) => {
  const res = await instance.get(`users/${name}/repos`);
  return res.data;
};

export const getFollowers = async (name) => {
  const res = await instance.get(`users/${name}/followers`);
  return res.data;
};

export const getFollowing = async (name) => {
  const res = await instance.get(`users/${name}/following`);
  return res.data;
};

export const getStarred = async (name) => {
  const res = await instance.get(`users/${name}/starred`);
  return res.data;
};


