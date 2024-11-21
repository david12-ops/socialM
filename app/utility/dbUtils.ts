import fs from 'fs/promises';
import path from 'path';
import { Data, User } from '../types';

const filePath = path.join("data", 'dbLocal.json');

export const readJsonFile = async (): Promise<Data | undefined> => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data) as Data;
    } catch (error) {
        console.error("Error reading JSON file:", error);
    }
}

export const writeJsonFile = async (data: Data) => {
    try {
        let fileContent;
        try {
            fileContent = await fs.readFile(filePath, 'utf-8');
        } catch (error) {
            console.warn("File not found, initializing with an empty users array.");
            fileContent = JSON.stringify({ users: [] });
            await fs.writeFile(filePath, fileContent);
        }

        let dataUsers: Data;
        try {
            const parsedData = JSON.parse(fileContent);
            dataUsers = parsedData && typeof parsedData === 'object' && Array.isArray(parsedData.users)
                ? parsedData
                : { users: [] };
        } catch (error) {
            console.warn("Invalid JSON structure, resetting to an empty users array.");
            dataUsers = { users: [] };
        }

        dataUsers.users = data.users

        await fs.writeFile(filePath, JSON.stringify(dataUsers, null, 2));
    } catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
