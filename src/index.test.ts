import { expect, describe, test } from 'vitest'
import { Main } from '.'

describe('main (just a template)', () => {
    test('should take a name and return it on get', () => {
        const sut = new Main('name')
        expect(sut.name).toBe('name')
    })
})