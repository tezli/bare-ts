import { WithName } from './types'

export class Main implements WithName {
    constructor(private _name: string) { }

    get name(): string {
        return this._name
    }
}