import { Client, Account, Databases, Storage, Avatars } from "appwrite";


export const appwriteConfig = {
    projectId: process.env.APPWRITE_PROJECT_ID || "",
    url: process.env.APPWRITE_URL || "",
} 


export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);
 
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);