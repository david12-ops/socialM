import { FetchComp } from '../components/home-comp';
import { Data, DataUser, User } from '../types';

const err = 'Not successfull';

const checkDataPost = async (
  data: any,
  method: (data: any) => Promise<JSX.Element>,
): Promise<JSX.Element> => {
  if (data && data.likes && data.name && data.photos && data.subscribers) {
    return method(data);
  }
  return <div>Data must be provided</div>;
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
  // funkcni
  const userData = data as DataUser;
  if (userData.name) {
    const response = await postMetod(data, 'DELETE');
    const result: { response: string } = response.ok
      ? await response.json()
      : { response: err };
    return <div>{result.response}</div>;
  }
  return <div>Username need to be provided</div>;
};

const createMethod = async (data: any) => {
  // funkcni
  const response = await postMetod(data, 'CREATE');
  const result: { response: User | string } = response.ok
    ? await response.json()
    : { response: err };
  return typeof result.response === 'object' ? (
    <div>{JSON.stringify(result.response)}</div>
  ) : (
    <div>{result.response}</div>
  );
};

const updateMethod = async (data: any) => {
  // funkcni
  const response = await postMetod(data, 'UPDATE');
  const result: { response: User | string } = response.ok
    ? await response.json()
    : { response: err };
  return typeof result.response === 'object' ? (
    <div>{JSON.stringify(result.response)}</div>
  ) : (
    <div>{result.response}</div>
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

  const result = (await response.json()) as Data;

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
