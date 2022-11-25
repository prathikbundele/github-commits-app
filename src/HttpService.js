import axios from 'axios';

export const getCommits = async () => {
    var response = null;
    await axios.get('https://api.github.com/repos/prathikbundele/github-commits-app/commits')
    .then(res => {
        console.log(res.data)
        response =res.data
    })
    return response;
}