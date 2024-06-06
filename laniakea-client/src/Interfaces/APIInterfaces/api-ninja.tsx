// Defines an interface for the API response from the Ninja API
// see: https://api-ninjas.com/api/planets
// this is the response ONLY if you provide a name to the planet (no other parameters)
export interface PlanetInfo {
    name: string;
    mass: number;
    radius: number;
    period: number;
    semi_major_axis: number;
    temperature: number;
    distance_light_year: number;
    host_star_mass: number;
    host_star_temperature: number;
}