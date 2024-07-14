const fetchData = async ({ url, data = null }) => {
  let returnedData;

  await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((formatted) => {
      returnedData = formatted;
    });

  return returnedData;
};

export { fetchData };
