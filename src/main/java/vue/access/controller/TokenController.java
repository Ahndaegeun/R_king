package vue.access.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vue.access.secure.JwtAuthProvider;

@Slf4j
@RestController
@RequestMapping("/valid")
@RequiredArgsConstructor
public class TokenController {

    private final JwtAuthProvider jwtAuthProvider;

    @PostMapping("/token")
    public boolean tokenValidation(String token) {
        return jwtAuthProvider.validateToken(token);
    }
}
