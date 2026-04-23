class NamesParse {
    private readonly name: string


    constructor(name: any) {
        this.name = name;
    }

    public get() {
        return this.name;
    }
}


export default {NamesParse};