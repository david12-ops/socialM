import { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../app/utility/db-utils'
import { Data, DataUser, PostData, User } from '@/app/types';
import { use } from 'react';

const err = `Required data do not provided by user`

const validate = (providedData: Data, data: DataUser, method: "CREATE" | "UPDATE") => {
  if (method === "CREATE") {
    return providedData.users.some((user) => user[data.name as string])
  }

  if (method === "UPDATE") {
    const otherusers = providedData.users.filter((user) => !user[data.name as string])
    return otherusers.some((user) => user[data.nameNew as string])
  }
}

const sendResponse = (res: NextApiResponse, code: number, result: any, responseType: 'ERROR' | 'SUCCESS') => {
  const errormsg = { error: { code, result } }
  const successmsg = { response: { code, result } }
  responseType === 'ERROR' ? res.status(code).json(errormsg) : res.status(code).json(successmsg)
};

const createMethod = async (data: DataUser, provideData: Data, res: NextApiResponse): Promise<User | undefined> => {

  if (!data.likes || !data.name || !data.subscribers || !data.photos) {
    sendResponse(res, 400, err, 'ERROR')
    return
  }

  if (validate(provideData, data, "CREATE")) {
    sendResponse(res, 400, "Bad input, user already exists", 'ERROR')
    return
  }

  const user = {
    [data.name as string]: {
      photos: data.photos, likes: data.likes, subscribers: data.subscribers
    }
  }

  const newData: { users: User[] } = { users: [] }
  newData.users = [...provideData.users, user]
  await writeJsonFile(newData)
  return user
};

const deleteMethod = async (data: DataUser, provideData: Data, res: NextApiResponse): Promise<string | undefined> => {
  if (!data.name) {
    sendResponse(res, 400, err, 'ERROR')
    return
  }

  if (provideData.users.some((user) => user[data.name as string])) {
    const newData: { users: User[] } = { users: [] }
    newData.users = provideData.users.filter((user) => !user[data.name as string])
    await writeJsonFile(newData)
    return data.name
  } else {
    sendResponse(res, 400, "User to delete not found", 'ERROR')
  }
};

const updateMethod = async (data: DataUser, provideData: Data, res: NextApiResponse): Promise<User | undefined> => {
  if (!data.likes || !data.name || !data.subscribers || !data.photos || !data.nameNew) {
    sendResponse(res, 400, err, 'ERROR')
    return
  }

  if (validate(provideData, data, "UPDATE")) {
    sendResponse(res, 400, "Bad input, user already exists", 'ERROR')
    return
  }

  const newData: { users: User[] } = { users: [] }
  const user = {
    [data.nameNew as string]: {
      photos: data.photos, likes: data.likes, subscribers: data.subscribers
    }
  }

  if (provideData.users.some((user) => user[data.name as string])) {
    newData.users = [...provideData.users.filter((user) => !user[data.name as string]), user]
    await writeJsonFile(newData)
    return user
  } else {
    sendResponse(res, 400, "User to update not found", 'ERROR')
  }

};

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
