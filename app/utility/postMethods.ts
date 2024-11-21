import { Data, DataUser, User } from "../types";

export const deleteMethod = (data: Data | undefined, provideData: DataUser): { dataToWrite: Data, successRes: string } | { failRes: Response } => {
    if (provideData && provideData.name && data) {
        if (data.users.some(user => user[provideData.name ?? ''])) {
            const updatedUsers = data.users.filter(user => !user[provideData.name ?? '']);
            return { successRes: `Deleted user ${provideData.name}`, dataToWrite: { users: updatedUsers } }
        } else {
            return {
                failRes: new Response("User by provided username not found", {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                })
            }
        }

    } else {
        return {
            failRes: new Response("Bad request, missing required data", {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            })
        }
    }
}

export const createMethod = (data: Data | undefined, provideData: DataUser): { dataToWrite: Data, successRes: User } | { failRes: Response } => {
    if (provideData && provideData.name && provideData.likes && provideData.photos && provideData.subscribers && data) {

        if (data.users.some(user => user[provideData.name ?? ''])) {
            return {
                failRes: new Response("Bad request, username already in use", {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                })
            }
        }

        const newUs = {
            [provideData.name]: {
                likes: provideData.likes, photos: provideData.photos, subscribers: provideData.subscribers
            }
        }

        data.users.push(newUs)

        return { dataToWrite: data, successRes: newUs }
    } else {
        return {
            failRes: new Response("Bad request, missing required data", {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            })
        }
    }
}

export const updateMethod = (data: Data | undefined, provideData: DataUser): { dataToWrite: Data, successRes: User } | { failRes: Response } => {
    if (provideData && provideData.name && provideData.likes && provideData.photos && provideData.subscribers && data && provideData.name !== '') {
        if (data.users.find(user => user[provideData.name as string])) {
            const name = provideData.nameNew && provideData.name !== '' ? provideData.nameNew : provideData.name

            const updateUs = {
                [name]: {
                    likes: provideData.likes, photos: provideData.photos, subscribers: provideData.subscribers
                }
            }
            const updated = data.users.filter(user => !user[provideData.name as string])
            updated.push(updateUs)
            data.users = updated
            return { dataToWrite: data, successRes: updateUs }
        }

        return {
            failRes: new Response("Provided username does not exist", {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            })
        }
    } else {
        return {
            failRes: new Response("Bad request, missing required data", {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            })
        }
    }
}