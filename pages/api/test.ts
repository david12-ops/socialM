import { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../app/utility/db-utils'
import { Data, DataUser, PostData } from '@/app/types';

const checkData = async (data: PostData, res: NextApiResponse) => {
  const headers = { 'Content-Type': 'application/json' }
  const err = `Required data do not provided by user`
  const { likes, name, subscribers, photos, nameNew } = data.data

  switch (data.method) {
    case "CREATE": {
      if (!likes || !name || !subscribers || !photos) {
        res.writeHead(405, headers);
        res.end(JSON.stringify({ response: err }));
        return res
      }
      break;
    }
    case "DELETE": {
      if (!name) {
        res.writeHead(405, headers);
        res.end(JSON.stringify({ response: err }));
        return res
      }
      break;
    }
    case "UPDATE": {
      if (!likes || !name || !subscribers || !photos || !nameNew) {
        res.writeHead(405, headers);
        res.end(JSON.stringify({ response: err }));
        return res
      }
      break;
    }
    default: {
      res.writeHead(405, headers);
      res.end(`Method ${data.method} Not Allowed`);
      return res;
    }
  }
};


const createMethod = async (data: DataUser, provideData: Data) => {

};

const deleteMethod = async (data: DataUser, provideData: Data) => {

};
const updateMethod = async (data: DataUser, provideData: Data) => {

};

const handlePostReq = (data: PostData, res: NextApiResponse, provideData: Data): object | NextApiResponse => {
  switch (data.method) {
    case "CREATE": {
      return {}
    }
    case "DELETE": {
      return {}
    }
    case "UPDATE": {
      return {}
    }
    default: {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(`Method ${data.method} Not Allowed`);
      return res;
    }
  }
}

// eslint-disable-next-line import/no-default-export
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const headers = { 'Content-Type': 'application/json' };

  const { method, body } = req;
  const data = await readJsonFile()

  checkData(body as PostData, res)

  switch (method) {
    case 'GET': {
      res.writeHead(200, headers);
      res.end(JSON.stringify(data));
      return res;
    }
    case 'POST': {
      const response = handlePostReq(body as PostData, res, data as Data)
      res.writeHead(200, headers);
      res.end(`jsem tu ${JSON.stringify({ response })}`);
      return 'statusCode' in response ? response : res;
    }
    default: {
      res.writeHead(405, headers);
      res.end(`Method ${method} Not Allowed`);
      return res;
    }
  }
}
