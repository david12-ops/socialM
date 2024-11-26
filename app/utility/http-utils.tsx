import { FetchComp } from '../components/home-comp';
import { Data, DataUser } from '../types';

const err = 'Not successfull';

const checkDataPost = async (
  data: any,
  method: (data: any) => Promise<JSX.Element>,
): Promise<JSX.Element> => {
  if (data && data.likes !== undefined && data.name !== undefined && data.photos !== undefined && data.subscribers !== undefined) {
    return method(data);
  }
  return <div>Data is invalid or not provided</div>;
};

const postMetod = async (
  data: any,
  method: 'DELETE' | 'CREATE' | 'GET' | 'UPDATE',
) => {
  return fetch(`http://localhost:3000/api/test`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data, method }),
  });
};

const deleteMethod = async (data: any) => {
  const userData = data as DataUser;
  if (userData.name) {
    const response = await postMetod(data, 'DELETE');
    const result = response.ok
      ? { response: (await response.json()).response.result }
      : { response: { error: err } };

    return result.response.hasOwnProperty("error") ? (
      <div>{result.response.error}</div>
    ) : <div>
      <h4>Name: {result.response}</h4>
    </div>
  }
  return <div>Username need to be provided</div>;
};

const createMethod = async (data: any) => {
  const response = await postMetod(data, 'CREATE');
  const result = response.ok
    ? { response: (await response.json()).response.result }
    : { response: { error: err } };

  if (result.response.hasOwnProperty("error")) {
    return <div>{result.response.error}</div>
  }

  const key = Object.keys(result.response)[0]
  return (
    <div>
      <h4>Name: {key}</h4>
      <div>
        <p>likes: {result.response[key].likes}</p>
        <p>Count of photos: {result.response[key].photos}</p>
        <p>Count of subscribers: {result.response[key].subscribers}</p>
      </div>
    </div>
  )

};

const updateMethod = async (data: any) => {
  const response = await postMetod(data, 'UPDATE');
  const result = response.ok
    ? { response: (await response.json()).response.result }
    : { response: { error: err } };

  if (result.response.hasOwnProperty("error")) {
    return <div>{result.response.error}</div>
  }

  const key = Object.keys(result.response)[0]
  return (
    <div>
      <h4>New name: {key}</h4>
      <div>
        <p>likes: {result.response[key].likes}</p>
        <p>Count of photos: {result.response[key].photos}</p>
        <p>Count of subscribers: {result.response[key].subscribers}</p>
      </div>
    </div>
  );
};

const getMethod = async () => {
  const url = `http://localhost:3000/api/test`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = (await response.json()).response.result as Data;

  return result ? <FetchComp data={result} /> : <div>Loading...</div>;
};

export const fetchData = async (
  method: 'DELETE' | 'CREATE' | 'GET' | 'UPDATE',
  data: any,
) => {
  switch (method) {
    case 'CREATE': {
      return checkDataPost(data, createMethod);
    }
    case 'DELETE': {
      return deleteMethod(data);
    }
    case 'GET': {
      return getMethod();
    }
    case 'UPDATE': {
      return checkDataPost(data, updateMethod);
    }
    default: {
      return <div>Bad request</div>;
    }
  }
};
