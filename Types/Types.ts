class PartIndex {

    private readonly index_1: string;
    private readonly index_2: string;
    private readonly index_3: string

    constructor(index_1: string, index_2: string, index_3: string) {

        this.index_1 = index_1;
        this.index_2 = index_2;
        this.index_3 = index_3;
    }

    getOne() {
        return this.index_1;
    }

    getTwo() {
        return this.index_2;
    }

    getThree() {
        return this.index_3;
    }
}

export default PartIndex