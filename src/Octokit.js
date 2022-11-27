import { Octokit } from '@octokit/rest';

export const octokit = (token) => new Octokit({
    auth : token,
    userAgent : 'skylight v1'
})