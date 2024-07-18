class TodoModel{
     
    rowNum: number;
    rowDesc: string;
    rowAssigned: string;

    constructor(rowNum: number, rowDesc: string, rowAssigned: string) {
        this.rowNum = rowNum;
        this.rowDesc = rowDesc;
        this.rowAssigned = rowAssigned;
    }
}