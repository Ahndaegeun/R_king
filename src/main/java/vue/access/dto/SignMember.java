package vue.access.dto;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignMember {

    private String memId;
    private String memPw;
    private String memEmail;
    private String memNm;
    private Integer age;
}
