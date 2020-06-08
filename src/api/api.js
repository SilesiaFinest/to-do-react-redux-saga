const URL = `https://jsonplaceholder.typicode.com/todos?_limit=10`;

const fetchData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export default fetchData;
