package vue.access.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import vue.access.dto.LoginMember;
import vue.access.dto.SignMember;
import vue.access.secure.JwtAuthProvider;
import vue.access.service.inter.MemberService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/member")
public class LoginController {

    private final MemberService memberService;
    private final JwtAuthProvider jwtAuthProvider;

    @PostMapping("/login")
    public Map<String, String> login(LoginMember loginMember) {
        log.info("login controller.LoginMember = {}", loginMember.toString());
        Map<String, String> map = new HashMap<>();
        if(memberService.login(loginMember)) {
            String token = jwtAuthProvider.createToken(loginMember.getUsername(), new ArrayList<>());
            map.put("token", token);
            map.put("isLogin", "true");
        } else {
            map.put("isLogin", "false");
        }
        log.info("result = {}", map.toString());
        return map;
    }

    @PostMapping("/sign")
    public String sign(SignMember signMember) {
        System.out.println(signMember);
        memberService.saveMember(signMember);
        return "ok";
    }

    @GetMapping("/admin")
    public String adminPage(String token) {
        log.info("admin page");
        log.info("token = {}", token);
        return "";
    }
}
