package vue.access.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vue.access.entity.Member;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByMemIdAndMemPw(String memId, String memPw);
    Optional<Member> findByMemNm(String memNm);

}
