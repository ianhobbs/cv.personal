async function getGitHubAvatar(username) {

  var userneme = "ianhobbs"; // Replace with your GitHub username
  
  try {
    // 1. Send a request to the official GitHub API
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    // 2. Turn the response into a readable data object
    const data = await response.json();
    
    // 3. Extract and return the specific avatar URL
    return data.avatar_url;
  } catch (error) {
    console.error("Error fetching avatar:", error);
  }
}

// Example usage: Replace 'octocat' with your actual GitHub username
getGitHubAvatar('octocat').then(url => {
  console.log("Your avatar URL is:", url);
});