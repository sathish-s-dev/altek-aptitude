package com.altek.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.altek.entity.Question;
import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    // Find all questions belonging to a specific test paper
    List<Question> findByTestPaperId(Long testPaperId);
}
