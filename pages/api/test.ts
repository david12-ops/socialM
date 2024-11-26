import { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../app/utility/db-utils'
import { Data, PostData } from '@/app/types';
import { createMethod, deleteMethod, updateMethod, sendResponse } from '@/app/utility/post-methods';

const handlePostReq = (data: PostData, res: NextApiResponse, provideData: Data) => {
  switch (data.method) {
    case "CREATE": {
      return createMethod(data.data, provideData, res)
    }
    case "DELETE": {
      return deleteMethod(data.data, provideData, res)
    }
    case "UPDATE": {
      return updateMethod(data.data, provideData, res)
    }
    default: {
      sendResponse(res, 405, `Method ${data.method} Not Allowed`, 'ERROR')
    }
  }
}

// eslint-disable-next-line import/no-default-export
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const data = body as PostData
  try {
    const providedData = await readJsonFile() as Data

    switch (method) {
      case 'GET': {
        sendResponse(res, 200, providedData, 'SUCCESS')
        break;
      }
      case 'POST': {
        const code = data.method === "DELETE" || data.method === "UPDATE" ? 200 : 201
        const response = await handlePostReq(data, res, providedData)
        if (response) {
          sendResponse(res, code, response, 'SUCCESS')
        }
        break;
      }
      default: {
        sendResponse(res, 405, `Method ${method} Not Allowed`, 'ERROR')
      }
    }
  }
  catch (error) {
    sendResponse(res, 500, `Unexpected error occured`, 'ERROR')
  }
}
