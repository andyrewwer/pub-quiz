package com.corelogic.schemaconverter.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping({"/home", "/game/*", "/game/*/*", "/answer", "/leaderboard", "/admin", "/add-question", "/edit-question"})
    public String home() {
        return "redirect:/";
    }
}
