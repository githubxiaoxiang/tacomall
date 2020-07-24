package cn.codingtalk.tacomallapiopen.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties(prefix = "oss")
public class OssProperties {

    private String endPoint;

    private String accesskey;

    private String accessSecret;

    private String bucket;

    private Long expire;

    private String host;

}
