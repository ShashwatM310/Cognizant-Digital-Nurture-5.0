package Exercise01.repository;

import org.junit.Test;

public class BookRepositoryTest {

    @Test
    public void displayBook_shouldNotThrow() {
        BookRepository repository = new BookRepository();
        repository.displayBook();
    }
}
