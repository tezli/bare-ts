import { expect, describe, test } from 'vitest'
import { Main } from './main'

describe('main (just a template)', () => {
    
    test('should take a name and return it on get', () => {
        const name = 'name'
        const sut = new Main(name)
        expect(sut.name).toBe(name)
    })
})