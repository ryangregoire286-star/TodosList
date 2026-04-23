class NamesParse {
    private readonly name: string

    constructor(name: any) {
        this.name = name;
    }

    get() {
        return this.name;
    }
}

export default  NamesParse;