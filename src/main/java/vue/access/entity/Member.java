package vue.access.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Member {

    @Id @GeneratedValue
    @Column(name = "member_idx")
    private Long id;

    @Column(name = "member_id")
    private String memId;

    @Column(name = "member_password")
    private String memPw;

    @Column(name = "member_email")
    private String memEmail;

    @Column(name = "member_name")
    private String memNm;

    @Column(name = "member_age")
    private int age;
}
