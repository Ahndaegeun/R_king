package vue.access.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vue.access.dto.LoginMember;
import vue.access.dto.SignMember;
import vue.access.service.inter.MemberService;

import java.util.Map;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/member")
public class LoginController {

    private final MemberService memberService;

    @PostMapping("/login")
    public String login(LoginMember loginMember) {
        log.info(loginMember.toString());
        memberService.login(loginMember);
        return "ok";
    }

    @PostMapping("/sign")
    public String sign(SignMember signMember) {
        System.out.println(signMember);
        memberService.saveMember(signMember);
        return "ok";
    }
}
