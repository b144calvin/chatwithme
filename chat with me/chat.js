const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-message');
const chatHistory = document.querySelector('.chat-history');

chatForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const message = chatInput.value;
  addMessage('You', message);
  chatInput.value = '';
  getBotResponse(message);
});

function addMessage(sender, message) {
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message');
  chatMessage.textContent = `${sender}: ${message}`;
  chatHistory.appendChild(chatMessage);
}


function getBotResponse(message) {
  let botMessage = '';
  if (message.includes('yooh') || message.includes('hey') || message.includes('sasa') || message.includes('yoo')|| message.includes('whatsup')) {
      botMessage = 'yoo','poa sana,rada','rada';
  } else if (message.includes('bye') || message.includes('si badaye')|| message.includes('tutaonana')) {
      botMessage = 'bye','goodbye';
  } else if (message.includes('name')|| message.includes('unaitwa nani')|| message.includes('whats your name')) {
      botMessage = 'im a bot,sina jina bado';
    } else if (message.includes('peer pressure manze inanipeleka mbio joo')|| message.includes('peer pressure')|| message.includes('peer pressure manze')) {
      botMessage ='ni ati utaavoid those people','focus on what you want','kile roho yako inataka' ;
     }else if (message.includes('pesa jooh') || message.includes('pesa jooh') || message.includes('manze nimesota') || message.includes('sina doo bana')|| message.includes('sina dooh')) {
        botMessage = 'izzah jooh,sa mi unataka nikutole pesa wapi';
  } else {
      botMessage = 'uskii,sijakupata','sikuelewi';
  }
  addMessage('Bot', botMessage);
}



  

