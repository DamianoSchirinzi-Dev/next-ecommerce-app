type Params = {
    id: string
}

type SearchParams = {
    name: string
    unit_amount : number
    image: string
    id: string
    quantity: number | 1,
    description: string | null
    features: string
}

export type SearchParamTypes = {
    params: Params,
    searchParams: SearchParams
}