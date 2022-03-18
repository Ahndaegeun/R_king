package vue.access.dto;

import com.sun.istack.NotNull;
import lombok.*;
import net.bytebuddy.implementation.bind.annotation.Empty;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginMember {

    private String userId;
    private String userPw;
}
