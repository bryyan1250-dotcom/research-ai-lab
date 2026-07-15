import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const scriptPath = path.join(rootDir, "launch-keynote", "generate_launch_keynote.py");

const child = spawn("py", ["-3", scriptPath], {
  cwd: rootDir,
  stdio: "inherit",
  shell: false,
});

child.on("exit", (code) => {
  process.exitCode = code ?? 0;
});

child.on("error", (error) => {
  console.error("Failed to run keynote generator:", error.message);
  process.exitCode = 1;
});
