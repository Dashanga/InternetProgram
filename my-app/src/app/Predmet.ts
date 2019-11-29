export class Predmet {
    tip: string;
    day: number;
    week: string;
    name: string;
    para: number;
    fakultet: string;
    kurs: number;
    teacher: string;
    constructor(tip: string, day: number, week: string, name: string, para: number, fakultet: string, kurs: number, teacher: string) {
        this.tip = tip;
        this.day = day;
        this.week = week;
        this.name = name;
        this.para = para;
        this.fakultet = fakultet;
        this.kurs = kurs;
        this.teacher = teacher;
    }
} 