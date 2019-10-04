package com.nsis.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
@Configuration
@ConfigurationProperties("spring.datasource")
@SuppressWarnings("unused")
public class DBConfiguration {

	@Profile("dev")
	@Bean
	public String devDatabaseConnection() {
		System.out.println("mode dev");
		return "DB connection for DEV - POSTGRES";
	}
	
	@Profile("prod")
	@Bean
	public String prodDatabaseConnection() {
		System.out.println("mode prod");
		return "DB connection for DEV - POSTGRES";
	}
}

