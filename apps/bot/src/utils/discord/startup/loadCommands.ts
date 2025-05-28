import path from "path";
import fs from "fs";
import url from "node:url";
import { Collection } from "discord.js";
import { CommandsCollection } from "../../../@types/discord";
import { logger } from "../../../logger/logger";

export async function loadSlashCommands() : Promise<CommandsCollection> {
	const foldersPath = path.join(process.cwd(), process.env.NODE_ENV === "production" ? "./dist/commands/execution" : "./src/commands/execution");
	const commandFiles = fs.readdirSync(foldersPath);

	const commandsCollection : CommandsCollection = new Collection();

	const importPromises = commandFiles.map(async file => {
		const command = url.pathToFileURL(path.resolve(foldersPath, file)).toString();
		const module = await import(command);
		commandsCollection.set(path.parse(file).name, module);
		logger(`Loaded command: ${path.parse(file).name}`);
	});

	await Promise.all(importPromises);
	return commandsCollection;
}
