package Exercise07.service;

import Exercise07.repository.BookRepository;
import org.junit.Test;

import static org.mockito.Mockito.mock;

public class BookServiceTest {

    @Test
    public void displayService_shouldInvokeRepository() {
        BookRepository mockRepo = mock(BookRepository.class);
        BookService service = new BookService(mockRepo);

        service.displayService();
    }
}
