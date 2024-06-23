document.getElementById('sendButton').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');
  
    responseDiv.textContent = 'Loading...';
  
    const response = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: userInput })
    });
  
    const data = await response.json();
    responseDiv.textContent = data.reply;
  });

function Back(){
  <button onclick="Menu('../mainHTT.html')">Назад</button>
}