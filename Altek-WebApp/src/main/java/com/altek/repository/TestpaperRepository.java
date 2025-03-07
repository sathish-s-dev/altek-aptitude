package com.altek.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.altek.entity.Testpaper;

@Repository
public interface TestpaperRepository extends JpaRepository<Testpaper, Integer> {

}
