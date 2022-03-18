package vue.access.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
        String encodedPw = passwordEncoder.encode(loginMember.getUserPw());
        return memberRepository.findByMemIdAndMemPw(loginMember.getUserId(), encodedPw).isPresent();
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
