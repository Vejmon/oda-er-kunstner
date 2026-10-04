package no.vejmon.kunstner.repo;

import no.vejmon.kunstner.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.UUID;

@RepositoryRestController
public interface ArticleRepository extends JpaRepository<Article, UUID> {
}
