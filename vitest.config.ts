import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: ['src/**/*.test.ts'],
        coverage: {
            reporter: ['lcov'],
            provider: 'v8',
            include: ['src/**/*.ts', '!src/**/*d.ts']
        }
    }
})