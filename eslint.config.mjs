import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.strict,
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/semi': ['error', 'never'],
            '@stylistic/indent': ['error', 4]
        }
    })