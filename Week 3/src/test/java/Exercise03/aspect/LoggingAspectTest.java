package Exercise03.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.Signature;
import org.junit.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class LoggingAspectTest {

    @Test
    public void logBefore_shouldNotThrow() {
        LoggingAspect aspect = new LoggingAspect();
        JoinPoint joinPoint = mock(JoinPoint.class);
        Signature signature = mock(Signature.class);
        when(signature.getName()).thenReturn("displayService");
        when(joinPoint.getSignature()).thenReturn(signature);

        aspect.logBefore(joinPoint);
    }
}
