package com.nsis.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nsis.exception.ResourceNotFoundException;
import com.nsis.model.Book;
import com.nsis.repository.BookRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class BookController {
	@Autowired
	private BookRepository bookRepository;

	@GetMapping("/book")
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}

	@GetMapping("/book/{id}")
	public ResponseEntity<Book> getbookById(@PathVariable(value = "id") Long bookId)
			throws ResourceNotFoundException {
		Book book = bookRepository.findById(bookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + bookId));
		return ResponseEntity.ok().body(book);
	}

	@PostMapping("/book")
	public Book createBook(@Valid @RequestBody Book book) {
		return bookRepository.save(book);
	}

	@PutMapping("/book")
    public ResponseEntity<Book> updateBook(@Valid @RequestBody Book bookDetails) throws ResourceNotFoundException {
        Book book = bookRepository.findById(bookDetails.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + bookDetails.getId()));
/*BALISEATROUVER*/
book.setAnnée(bookDetails.getAnnée());
book.setAuteur(bookDetails.getAuteur());
book.setTitre(bookDetails.getTitre());

        final Book updatedBook = bookRepository.save(book);
        return ResponseEntity.ok(updatedBook);
    }

	@DeleteMapping("/book/{id}")
	public Map<String, Boolean> deleteBook(@PathVariable(value = "id") Long bookId)
			throws ResourceNotFoundException {
		Book book = bookRepository.findById(bookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + bookId));

		bookRepository.delete(book);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}


