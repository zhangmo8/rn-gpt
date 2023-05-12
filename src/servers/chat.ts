export const gptDemo = () => {
  const requstOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: '自我介绍，10个字' }],
      stream: true,
    }),
  };

  return fetch('https://api.openai.com/v1/chat/completions', requstOptions);
};
