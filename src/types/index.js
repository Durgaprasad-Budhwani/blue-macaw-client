
export type Song = {
    _id : string,
    name : string,
    duration : number,
    description : string,
    license : string,
    size : number,
    url : string,
    composer : Array<string>,
    tags : Array<string>,
    category : string,
    error: any,
    isPlaying: boolean,
    progress: number,
    loading: boolean,
    image: string
}

export type SongsInfo = {
    loading: boolean,
    error: string,
    songs: Array<Song>
}
