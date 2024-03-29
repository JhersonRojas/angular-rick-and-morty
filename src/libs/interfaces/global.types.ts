/**
 * Tipos para posible estructura de la respuesta
 */
export interface ResponseTypes {
    characters?: Character[];
    character?: Character;
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
export type Gender = "Female" | "Male" | "unknown"

/**
 * Tipos para las posibles especies que tiene un personaje
 */
export type Species = "Alien" | "Human"


/**
 * Tipos para el posible estado del personaje
 */
export type Status = "Alive" | "Dead" | "unknown"

/**
 * Tipos para la localización de algún personaje
 */
export interface Location {
    name: string;
    url: string;
}