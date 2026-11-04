import antfu from "@antfu/eslint-config"
import reactHooks from "eslint-plugin-react-hooks"
import { defineConfig } from "eslint/config"

const antfuConfig = antfu({
    type: `app`,
    formatters: true,
    nextjs: true,
    gitignore: true,
    typescript: true,
    react: true,
    yaml: true,
    jsonc: false,
    stylistic: {
        indent: 4,
        quotes: `backtick`,
    },

}, {
    files: [`**/*.tsx`, `**/*.ts`],

}, {
    rules: {
        "ts/array-type": [`error`],
        "ts/no-redeclare": [`off`],
        "ts/consistent-type-definitions": [`error`, `type`],
        "no-console": [`warn`],
        "antfu/no-top-level-await": [`off`],
        "node/prefer-global/process": [`off`],
        "node/no-process-env": [`error`],
        "perfectionist/sort-imports": [
            `error`,
            {
                tsconfig: {
                    rootDir: `.`,
                    filename: `tsconfig.json`,
                },

            },
        ],
        "unicorn/filename-case": [
            `warn`,
            {
                cases: {
                    kebabCase: false,
                    camelCase: true,
                    snakeCase: true,
                    pascalCase: true,
                },
                ignore: [`README.md`, `(\.md|\.yaml)`, `next-env.d.ts`],
            },
        ],

    },
})

export default defineConfig([
    ...await antfuConfig,
    reactHooks.configs.flat.recommended,

    {
        ignores: [
            `dist`,
            `**/*.md`,
            `**/*.yaml`,
            `next-env.d.ts`,
        ],
    },

])
