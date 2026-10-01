package no.vejmon.kunstner.view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Controlla {

    @GetMapping("/admin")
    public String admin() {
        return "admin-page.html";
    }
}
