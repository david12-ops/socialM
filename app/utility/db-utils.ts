import fs from 'node:fs/promises';
import path from 'node:path';

import { Data } from '../types';

const filePath = path.join(process.cwd(), 'data', 'dbLocal.json');

export const readJsonFile = async (): Promise<Data | object> => {
  try {
    const data = await fs.readFile(filePath, 'utf8');

    return JSON.parse(data) as Data;
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      console.error(`File not found:',${filePath}`);
      return {}
    } else {
      console.error(`Error reading file:',${error}`);
      return {}
    }
  }
};

export const writeJsonFile = async (data: Data) => {
  try {
    let fileContent;
    try {
      fileContent = await fs.readFile(filePath, 'utf8');
    } catch {
      console.warn('File not found, initializing with an empty users array.');
      fileContent = JSON.stringify({ users: [] });
      await fs.writeFile(filePath, fileContent);
    }

    let dataUsers: Data;
    try {
      const parsedData = JSON.parse(fileContent);
      dataUsers =
        parsedData &&
          typeof parsedData === 'object' &&
          Array.isArray(parsedData.users)
          ? parsedData
          : { users: [] };
    } catch {
      console.warn(
        'Invalid JSON structure, resetting to an empty users array.',
      );
      dataUsers = { users: [] };
    }

    dataUsers.users = data.users;

    await fs.writeFile(filePath, JSON.stringify(dataUsers, null, 2));
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }
};
