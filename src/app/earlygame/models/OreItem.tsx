import { OreTypes } from "./enums";

export class OreItem {

    name: string;
    value: number;
    type: OreTypes;

    constructor (name: string, value: number, type: OreTypes) {
        this.name = name;
        this.value = value;
        this.type = type;
    }
}