using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace laniakea_server.Utils;
public static class AuthUtils
{
    public static string HashPassword(string userPassword, byte[] salt)
    {
        return Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: userPassword,
            salt: salt,
            prf: KeyDerivationPrf.HMACSHA512,
            iterationCount: 10000,
            numBytesRequested: 256 / 8));
    }
}