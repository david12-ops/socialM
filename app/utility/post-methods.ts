import { Data, DataUser, User } from '../types';

const headers = { 'Content-Type': 'application/json' };
const err = 'Bad request, missing required data';

export const deleteMethod = (
  data: Data | undefined,
  provideData: DataUser,
): { dataToWrite: Data; successRes: string } | { failRes: Response } => {
  if (provideData && provideData.name && data) {
    if (data.users.some((user) => user[provideData.name ?? ''])) {
      const updatedUsers = data.users.filter(
        (user) => !user[provideData.name ?? ''],
      );
      return {
        successRes: `Deleted user ${provideData.name}`,
        dataToWrite: { users: updatedUsers },
      };
    }
    return {
      failRes: new Response('User by provided username not found', {
        status: 400,
        headers,
      }),
    };
  }
  return {
    failRes: new Response(err, {
      status: 400,
      headers,
    }),
  };
};

export const createMethod = (
  data: Data | undefined,
  provideData: DataUser,
): { dataToWrite: Data; successRes: User } | { failRes: Response } => {
  if (
    provideData &&
    provideData.name &&
    provideData.likes &&
    provideData.photos &&
    provideData.subscribers &&
    data
  ) {
    if (data.users.some((user) => user[provideData.name ?? ''])) {
      return {
        failRes: new Response('Bad request, username already in use', {
          status: 400,
          headers,
        }),
      };
    }

    const newUs = {
      [provideData.name]: {
        likes: provideData.likes,
        photos: provideData.photos,
        subscribers: provideData.subscribers,
      },
    };

    data.users.push(newUs);

    return { dataToWrite: data, successRes: newUs };
  }
  return {
    failRes: new Response(err, {
      status: 400,
      headers,
    }),
  };
};

export const updateMethod = (
  data: Data | undefined,
  provideData: DataUser,
): { dataToWrite: Data; successRes: User } | { failRes: Response } => {
  if (
    provideData &&
    provideData.name &&
    provideData.likes &&
    provideData.photos &&
    provideData.subscribers &&
    data &&
    provideData.name !== ''
  ) {
    if (data.users.some((user) => user[provideData.name as string])) {
      const dataToWrite: { users: Array<User> } = { users: [] };
      const name =
        provideData.nameNew && provideData.name !== ''
          ? provideData.nameNew
          : provideData.name;

      const updateUs = {
        [name]: {
          likes: provideData.likes,
          photos: provideData.photos,
          subscribers: provideData.subscribers,
        },
      };
      const updated = data.users.filter(
        (user) => !user[provideData.name as string],
      );
      updated.push(updateUs);
      dataToWrite.users = updated;
      return { dataToWrite, successRes: updateUs };
    }

    return {
      failRes: new Response('Provided username does not exist', {
        status: 400,
        headers,
      }),
    };
  }
  return {
    failRes: new Response(err, {
      status: 400,
      headers,
    }),
  };
};
