import { WithName } from './types'

export class App implements WithName {
    constructor(private readonly _name: string) { }

    get name(): string {
        return this._name
    }
}