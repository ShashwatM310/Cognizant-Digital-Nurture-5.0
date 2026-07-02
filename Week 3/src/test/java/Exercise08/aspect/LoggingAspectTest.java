package Exercise08.aspect;

import org.junit.Test;

public class LoggingAspectTest {

    @Test
    public void beforeMethod_shouldNotThrow() {
        LoggingAspect aspect = new LoggingAspect();
        aspect.beforeMethod();
    }

    @Test
    public void afterMethod_shouldNotThrow() {
        LoggingAspect aspect = new LoggingAspect();
        aspect.afterMethod();
    }
}
