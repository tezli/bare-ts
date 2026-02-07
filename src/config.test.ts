import { expect, describe, test } from 'vitest'
import { configure, ENVIRONMENT } from './config'

describe('config (just a template)', () => {

    test('should read values when available', () => {
        
        const appName = 'test'
        const environment = 'test'

        const config = configure({ APP_NAME: appName, NODE_ENV: environment })

        expect(config.appName).toBe(appName)
        expect(config.environment).toBe(environment)

    })

    test('should return defaults when no values available', () => {

        const config = configure({})

        expect(config.appName).toBe('')
        expect(config.environment).toBe(ENVIRONMENT.PRODUCTION)
    })
})