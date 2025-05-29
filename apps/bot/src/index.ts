import "dotenv/config";
import "@managers/eventScheduleManager";
import { connectDatabase } from "@managers/databaseManager";
import { connectDiscord } from "@managers/discord/discordManager";
import "./cronJobs/jobs";

connectDatabase((process.env.MONGO_CONNECTION_STRING) as string);
connectDiscord(process.env.DISCORD_TOKEN as string);