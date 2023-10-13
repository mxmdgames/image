// Update the URL to match your server's address
fetch('http://192.168.1.1:5000/generate-image', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt, savePath }),
})
// Handle the response from the server
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error("Error:", error);
});
