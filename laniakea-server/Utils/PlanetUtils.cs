namespace laniakea_server.Utils;

public static class PlanetUtils
{

    private static double JUPITER_MASS = 1.898 * Math.Pow(10, 27);



    public enum PLANET_TYPES
    {
        MERCURY,
        VENUS,
        EARTH,
        MARS,
        JUPITER,
        SATURN,
        URANUS,
        NEPTUNE,
        PLUTO // Boo-hoo, I'm not making another enum just for Pluto 
    }
    
    public static double jupitersToKg(double val)
    {
        return val * JUPITER_MASS;
    }
}