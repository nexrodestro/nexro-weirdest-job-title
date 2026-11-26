// Weirdest job title entry — one job title, 40 characters, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Airplane Seat Recline Permission Granter";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
