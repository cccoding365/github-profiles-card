export const fetchProfilesData = async user => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    // console.log(data);
    return data
};