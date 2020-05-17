package com.spring.mongodb;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class ServletInitializer extends SpringBootServletInitializer{

	protected SpringApplicationBuilder configure(SpringApplicationBuilder app) {
		return app.sources(SpringMongodbApplication.class);
	}
}
