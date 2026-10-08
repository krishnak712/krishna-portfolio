import { defineConfig } from "vite";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isUserSite = repository.endsWith(".github.io");
const base = repository && !isUserSite ? `/${repository}/` : "/";

export default defineConfig({
  base,
});
