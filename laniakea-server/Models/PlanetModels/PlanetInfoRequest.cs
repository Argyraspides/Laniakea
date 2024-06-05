namespace laniakea_server.Models.PlanetModels;

// Modelled after:
// https://api-ninjas.com/api/planets
public class PlanetInfoRequest
{
    public string? Name { get; set; } // The name of the planet (optional)

    // Mass of the planet in Jupiters (1 Jupiter = 1.898 × 10^27 kg)
    public double? MinMass { get; set; } // Minimum mass (optional)
    public double? MaxMass { get; set; } // Maximum mass (optional)

    // Average radius of the planet in Jupiters (1 Jupiter = 69911 km)
    public double? MinRadius { get; set; } // Minimum radius (optional)
    public double? MaxRadius { get; set; } // Maximum radius (optional)

    // Orbital period of the planet in Earth days
    public double? MinPeriod { get; set; } // Minimum period (optional)
    public double? MaxPeriod { get; set; } // Maximum period (optional)

    // Average surface temperature of the planet in Kelvin
    public double? MinTemperature { get; set; } // Minimum temperature (optional)
    public double? MaxTemperature { get; set; } // Maximum temperature (optional)

    // Distance the planet is from Earth in light-years
    public double? MinDistanceLightYear { get; set; } // Minimum distance (optional)
    public double? MaxDistanceLightYear { get; set; } // Maximum distance (optional)

    // Semi-major axis of the planet's orbit in astronomical units (AU)
    public double? MinSemiMajorAxis { get; set; } // Minimum semi-major axis (optional)
    public double? MaxSemiMajorAxis { get; set; } // Maximum semi-major axis (optional)

    // Used for pagination, indicating the number of results to skip
    public int? Offset { get; set; } = 0; // Default to 0 for no offset
    
    
}