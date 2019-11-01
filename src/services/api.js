export const sendEvent = async ({ date, story, task }) => {
  const response = await fetch("", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ date, story, task })
  });
  return await response.json();
};
