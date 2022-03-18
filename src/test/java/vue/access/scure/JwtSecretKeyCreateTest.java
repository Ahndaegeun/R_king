package vue.access.scure;

import org.junit.jupiter.api.Test;

public class JwtSecretKeyCreateTest {

    @Test
    void jtwKeyTest() throws Exception {
        //given
        Process process = Runtime.getRuntime().exec("openssl", new String[]{"rand", "-hex", "64"});

        //when

        //then
    }
}
