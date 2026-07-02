package Exercise06.service;

import Exercise06.repository.BookRepository;
import org.junit.Test;

import java.lang.reflect.Field;

public class BookServiceTest {

    @Test
    public void displayService_shouldNotThrow() throws Exception {
        BookService service = new BookService();
        BookRepository repository = new BookRepository();
        setPrivateField(service, "bookRepository", repository);

        service.displayService();
    }

    private void setPrivateField(Object target, String fieldName, Object value) throws Exception {
        Field field = target.getClass().getDeclaredField(fieldName);
        field.setAccessible(true);
        field.set(target, value);
    }
}
