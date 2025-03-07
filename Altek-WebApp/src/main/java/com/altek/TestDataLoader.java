package com.altek;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.altek.entity.Testpaper;
import com.altek.entity.Question;
import com.altek.repository.TestpaperRepository;
import com.altek.repository.QuestionRepository;

import java.util.Arrays;

@Component
public class TestDataLoader implements CommandLineRunner {

    @Autowired
    private TestpaperRepository testPaperRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public void run(String... args) throws Exception {
        // Create Test Paper
        Testpaper testPaper = new Testpaper();
        testPaper.setTitle("Basic Math Test");

        // Create Questions for this test paper
        Question q1 = new Question("What is 2 + 2?", "A", "B", "C", "D", "A", testPaper);
        Question q2 = new Question("What is 5 * 5?", "10", "20", "25", "30", "C", testPaper);

        // Save test paper and questions
        testPaper.setQuestions(Arrays.asList(q1, q2));
        testPaperRepository.save(testPaper);
    }
}
