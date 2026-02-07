import { WithName } from './types'

export class Main implements WithName {
    constructor(private readonly name: string) { }

    getName(): string {
        return this.name
    }
}