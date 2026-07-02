package Exercise01.service;

import org.junit.Test;

public class BookServiceTest {

    @Test
    public void displayService_shouldNotThrow() {
        BookService service = new BookService();
        service.displayService();
    }
}
