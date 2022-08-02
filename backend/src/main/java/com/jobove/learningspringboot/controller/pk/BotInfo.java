package com.jobove.learningspringboot.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/pk/")
public class BotInfo {

    @RequestMapping("getbotinfo/")
    public Map<String, String> getBotInfo() {
        Map<String, String> res = new HashMap<>();

        res.put("name", "Bot1");
        res.put("rating", "1000");

        return res;
    }
}
