export const fetchProfilesData = async user => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    return data
    return new Promise((resolve, reject) => {
        const data = {
            avatar_url: "https://avatars.githubusercontent.com/u/49092777?v=4",
            bio: "💖 Do what you love, love what you do.",
            blog: "https://hecongcong.com",
            company: null,
            created_at: "2019-03-30T09:57:29Z",
            email: null,
            events_url: "https://api.github.com/users/cccoding365/events{/privacy}",
            followers: 999,
            followers_url: "https://api.github.com/users/cccoding365/followers",
            following: 666,
            following_url: "https://api.github.com/users/cccoding365/following{/other_user}",
            gists_url: "https://api.github.com/users/cccoding365/gists{/gist_id}",
            gravatar_id: "",
            hireable: null,
            html_url: "http://github.com/cccoding365",
            id: 49092777,
            location: "China Amoy",
            login: "cccoding365",
            name: "DoubledConG",
            node_id: "MDQ6VXNlcjQ5MDkyNzc3",
            organizations_url: "https://api.github.com/users/cccoding365/orgs",
            public_gists: 0,
            public_repos: 34,
            received_events_url: "https://api.github.com/users/cccoding365/received_events",
            repos_url: "https://api.github.com/users/cccoding365/repos",
            site_admin: false,
            starred_url: "https://api.github.com/users/cccoding365/starred{/owner}{/repo}",
            subscriptions_url: "https://api.github.com/users/cccoding365/subscriptions",
            twitter_username: null,
            type: "User",
            updated_at: "2023-10-23T15:15:50Z",
            url: "https://api.github.com/users/cccoding365"
        };
        setTimeout(() => {
            resolve(data);
        }, 0);
    });
};