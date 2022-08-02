package com.jobove.learningspringboot.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pk/")
public class BotInfo {

    @RequestMapping("getbotinfo/")
    public String getBotInfo() {
        return "hhhh";
    }
}
