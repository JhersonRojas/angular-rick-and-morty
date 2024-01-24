/**
 * Tipos para posible estructura de la respuesta
 */
export interface ResponseTypes {
    characters?: Character[];
    error?: string | null;
    load: boolean
};

/**
 * Respuesta principal de la petición a la Api Rick y Morty 
 */
export interface Request_RickAndMorty {
    info: Info;
    results: Character[];
}

/**
 * Información general de los resultados
 */
export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: null;
}

/**
 *  Resultado como información de un personaje con sus detalles
 */
export interface Character {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

/**
 * Tipos para el genero algún personaje
 */
export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

/**
 * Tipos para la localización de algún personaje
 */
export interface Location {
    name: string;
    url: string;
}

/**
 * Tipos para las posibles especies que tiene un personaje
 */
export enum Species {
    Alien = "Alien",
    Human = "Human",
}

/**
 * Tipos para el posible estado del personaje
 */
export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
