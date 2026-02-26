import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig(({ mode }) => {
  const isDemo = mode === "demo";

  return {
    base: isDemo ? "/shape-puzzle-captcha/" : "/",

    plugins: [!isDemo && dts({ insertTypesEntry: true })].filter(Boolean),

    build: {
      outDir: isDemo ? "dist-demo" : "dist",
      lib: isDemo
        ? undefined
        : {
            entry: "src/shape-puzzle-captcha.ts",
            name: "ShapePuzzleCaptcha",
            fileName: (format) => `shape-puzzle-captcha.${format}.js`,
            formats: ["es", "umd"],
          },
      rollupOptions: {
        external: isDemo ? [] : ["lit", "three", "three-bvh-csg"],
        output: {
          globals: (isDemo
            ? {}
            : {
                lit: "Lit",
                three: "THREE",
                "three-bvh-csg": "THREE_BVH_CSG",
              }) as Record<string, string>,
        },
      },
    },
  };
});
