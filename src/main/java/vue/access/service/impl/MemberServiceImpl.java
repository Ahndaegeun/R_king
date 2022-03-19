package vue.access.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import vue.access.dto.LoginMember;
import vue.access.dto.SignMember;
import vue.access.entity.Member;
import vue.access.repository.MemberRepository;
import vue.access.service.inter.MemberService;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public boolean login(LoginMember loginMember) {
        Member member = memberRepository.findByMemId(loginMember.getUserId()).orElse(null);
        if(!(member != null & passwordEncoder.matches(loginMember.getPassword(), member.getMemPw()))) {
            throw new IllegalArgumentException("아이디 혹은 비밀번호를 확인해 주세요");
        }
        return true;
    }

    @Override
    public void saveMember(SignMember signMember) {
        log.info("signMember Pw = {}", signMember.getMemPw());
        String encodedPw = passwordEncoder.encode(signMember.getMemPw());
        log.info("encodedPw = {}", encodedPw);
        Member member = new Member(null, signMember.getMemId(), encodedPw, signMember.getMemEmail(), signMember.getMemNm(), 0);
        memberRepository.save(member);
    }
}
