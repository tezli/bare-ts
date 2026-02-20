import { expect, describe, test } from 'vitest'
import { App } from './app'

describe('main (just a template)', () => {
    
    test('should take a name and return it on get', () => {
        const name = 'name'
        const sut = new App(name)
        expect(sut.name).toBe(name)
    })
})