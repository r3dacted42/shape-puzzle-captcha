import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig(({ mode }) => {
  const isDemo = mode === "demo";
  const isBundle = mode === "bundle";

  return {
    base: isDemo ? "/shape-puzzle-captcha/" : "/",

    plugins: [!isDemo && !isBundle && dts({ insertTypesEntry: true })].filter(Boolean),

    build: {
      outDir: isDemo ? "dist-demo" : ( isBundle ? "dist/bundle" : "dist"),
      copyPublicDir: isDemo,
      lib: isDemo
        ? undefined
        : {
            entry: "src/shape-puzzle-captcha.ts",
            name: "ShapePuzzleCaptcha",
            fileName: (format) =>
              format === "es"
                ? "shape-puzzle-captcha.js"
                : "shape-puzzle-captcha.cjs",
            formats: isBundle ? ["es"] : ["es", "umd"],
          },
      rollupOptions: {
        external: (isDemo || isBundle) ? [] : ["lit", "three", "three-bvh-csg"],
        output: {
          globals: ((isDemo || isBundle)
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
