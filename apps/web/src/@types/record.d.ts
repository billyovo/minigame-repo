import type { RecordMode } from "~/enums/record"

export type WinnerRecordItem = {
    _id: string,
    name: string,
    UUID: string,
    server: ServerChinese,
    event: string,
    date: string,
}

export type WinnerCountItem = {
    name: string,
    UUID: string,
    total: number
}

export type WinnerRecordResponse = {
    total: number,
    rows : WinnerRecordItem[]
}

export type WinnerCountResponse = {
    total: number,
    rows : WinnerCountItem[]
}


export type fetchRecordParams = {
    mode: RecordMode,
    server: Server,
    event: string,
    name?: string
}

export type fetchCountOptions = {
    page: number,
    limit: number,
    dateBefore: string
}

export type fetchRecordOptions = {
    before?: string,
    limit: number
    dateBefore: string
}
