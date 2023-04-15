import githubRequest from "@/models/githubRequest.model"

export default async function githubRepos():Promise<githubRequest> {
    const data = await fetch('https://api.github.com/users/santiagohernandezs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    .then(data => data.json())

    return {value: data.public_repos}
}