package vue.access.secure;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;

import java.time.LocalDateTime;
import java.util.Date;

@Slf4j
public class JwtAuthProvider {

    private static final String SECRET_KEY = "8cc495647f614d617c9467f738cfd629dffef173e859aa6a2aa6b3c9286bc90f2cced12e4eba0a835478b88ad68c13765164fbfea0dbe47820d9b052defaca6b";

    private static final int EXPIRE_JWT = 604800000;

    public static String createToken(Authentication authentication) {
        Date now = new Date();
        Date expire = new Date(now.getTime() - EXPIRE_JWT);

        return Jwts.builder()
                .setSubject( (String) authentication.getPrincipal())
                .setIssuedAt(new Date())
                .setExpiration(expire)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    public static String getUserId(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public static boolean validateToken(String token) {
        try {
            Jwts
                    .parser()
                    .setSigningKey(SECRET_KEY)
                    .parseClaimsJws(token);
            return true;
        } catch (SignatureException ex) {
            log.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
        }
        return false;
    }
}
