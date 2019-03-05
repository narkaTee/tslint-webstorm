import {Foobar} from "./foobar";

class Test {
    constructor(private input: string) {}

    public makeStuff(): string {
        Foobar.do();
        return this.input;
    }
}
