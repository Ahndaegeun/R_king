package vue.access.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.NoHandlerFoundException;

@Controller
public class HomeController implements ErrorController {

    // 페이지 못찾을때 404오류 뜨고 이쪽으로 mapping 후 index 로 redirect
    @GetMapping({"/error"})
    public String getUsers() {
        return "/static/index.html";
    }

}
