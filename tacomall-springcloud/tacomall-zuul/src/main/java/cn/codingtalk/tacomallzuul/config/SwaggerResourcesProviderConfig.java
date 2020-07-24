package cn.codingtalk.tacomallzuul.config;

import java.util.List;
import java.util.ArrayList;

import org.springframework.cloud.netflix.zuul.filters.Route;
import org.springframework.cloud.netflix.zuul.filters.RouteLocator;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import springfox.documentation.swagger.web.SwaggerResource;
import springfox.documentation.swagger.web.SwaggerResourcesProvider;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
@Primary
public class SwaggerResourcesProviderConfig implements SwaggerResourcesProvider {

    private final RouteLocator routeLocator;

    public SwaggerResourcesProviderConfig(RouteLocator routeLocator) {
        this.routeLocator = routeLocator;
    }

    @Override
    public List<SwaggerResource> get() {
        List resources = new ArrayList();
        List<Route> routes = routeLocator.getRoutes();
        for (Route route : routes) {
            resources.add(swaggerResource(route.getId(), route.getFullPath().replace("**", "v2/api-docs"), "2.0"));
        }
        return resources;
    }

    private SwaggerResource swaggerResource(String name, String location, String version) {
        SwaggerResource swaggerResource = new SwaggerResource();
        swaggerResource.setName(name);
        swaggerResource.setLocation(location);
        swaggerResource.setSwaggerVersion(version);
        return swaggerResource;
    }

}
