import dotenv from 'dotenv'

interface EnvVars {
    [key: string]: string | undefined;
}

export const ENVIRONMENT = {
    TEST: 'test',
    DEVELOPMENT: 'development',
    PRODUCTION: 'production'
} as const

export type ENVIRONMENT = typeof ENVIRONMENT[keyof typeof ENVIRONMENT]

export interface AppConfig {
    appName: string
    environment: ENVIRONMENT
}

export function configure(env: EnvVars): AppConfig {
    dotenv.config({ quiet: true })

    const environments = [
        ENVIRONMENT.DEVELOPMENT,
        ENVIRONMENT.TEST,
        ENVIRONMENT.PRODUCTION
    ] as string[]

    const nodeenv = env.NODE_ENV || ''

    const environment = environments.includes(nodeenv) ?
        env.NODE_ENV as ENVIRONMENT :
        ENVIRONMENT.PRODUCTION

    const appName = env.APP_NAME || ''

    return {
        appName,
        environment
    }
}