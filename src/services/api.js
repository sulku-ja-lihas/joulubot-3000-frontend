export const startRaffle = async () => {
  const response = await fetch(
    "https://peaceful-retreat-28124.herokuapp.com/startraffle",
    {
      method: "GET"
    }
  );

  return await response.json();
};

export const finishRaffle = async () => {
  const response = await fetch(
    "https://peaceful-retreat-28124.herokuapp.com/startraffle",
    {
      method: "GET"
    }
  );

  return await response.json();
};
