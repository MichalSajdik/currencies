export type CurrencyPropsType = {
    banknoteRate?: RateType;
    currency: string;
    exchangeRate?: RateType;
    flags?: string[];
    nameI18N?: string;
    precision: number;
}

type RateType = {
    buy?: number;
    indicator?: number;
    lastModified?: Date;
    middle?: number;
    sell?: number;
}
