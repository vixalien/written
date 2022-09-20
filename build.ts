// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "@vixalien/written",
    version: Deno.args[0],
    description: "A  set of utilities for manipulating text, with a focus on providing typographic tools rather than pure string manipulation.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/vixalien/written.git",
    },
    bugs: {
      url: "https://github.com/vixalien/written/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENCE", "npm/LICENCE");
Deno.copyFileSync("README.md", "npm/README.md");
