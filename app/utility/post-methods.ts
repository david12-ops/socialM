import { NextApiResponse } from "next";
import { Data, DataUser, User } from "../types";
import { writeJsonFile } from "./db-utils";

const err = `Required data do not provided by user`

const validatePostMethodByOperation = (providedData: Data, data: DataUser, method: "CREATE" | "UPDATE") => {
  if (method === "CREATE") {
    return providedData.users.some((user) => user[data.name as string])
  }

  if (method === "UPDATE") {
    const otherusers = providedData.users.filter((user) => !user[data.name as string])
    return otherusers.some((user) => user[data.nameNew as string])
  }
}

export const sendResponse = (res: NextApiResponse, code: number, result: any, responseType: 'ERROR' | 'SUCCESS') => {
  const errormsg = { error: { code, result } }
  const successmsg = { response: { code, result } }
  responseType === 'ERROR' ? res.status(code).json(errormsg) : res.status(code).json(successmsg)
};


export const createMethod = async (data: DataUser, provideData: Data, res: NextApiResponse): Promise<User | undefined> => {
  if (data.likes === undefined || !data.name || data.subscribers === undefined || data.photos === undefined) {
    sendResponse(res, 400, err, 'ERROR')
    return
  }

  if (validatePostMethodByOperation(provideData, data, "CREATE")) {
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

export const deleteMethod = async (data: DataUser, provideData: Data, res: NextApiResponse): Promise<string | undefined> => {
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

export const updateMethod = async (data: DataUser, provideData: Data, res: NextApiResponse): Promise<User | undefined> => {
  if (data.likes === undefined || !data.name || data.subscribers === undefined || data.photos === undefined || !data.nameNew) {
    sendResponse(res, 400, err, 'ERROR')
    return
  }

  if (validatePostMethodByOperation(provideData, data, "UPDATE")) {
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

