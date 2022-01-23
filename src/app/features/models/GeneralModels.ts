export interface IChampionResponse {

    results: IChampion[]

}

export interface IChampion {

    name: string,
    url: string,
    calles: ICalles[],
    runas: string,

}

export interface ICalles {

    calle: string,
    url: string,

}