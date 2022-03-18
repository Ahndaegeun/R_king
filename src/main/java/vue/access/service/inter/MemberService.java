package vue.access.service.inter;

import vue.access.dto.LoginMember;
import vue.access.dto.SignMember;

public interface MemberService {

    boolean login(LoginMember loginMember);
    void saveMember(SignMember signMember);
}
