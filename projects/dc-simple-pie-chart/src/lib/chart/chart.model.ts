export class Chart {
    title: string;
    chartValues: ChartValue[];

    constructor(data?) {
        this.title = data ? data.title : '';
        this.chartValues = data ? data.chartValues : [];
    }
}

export class ChartValue {
    name: string;
    value: number;
    color: string;

    constructor(data?) {
        this.name = data ? data.name : '';
        this.value = data ? data.value : 0;
        this.color = data ? data.color : '';
    }
}
