DROP TABLE IF EXISTS top_sites;
CREATE TABLE top_sites (
   id INT AUTO_INCREMENT PRIMARY KEY, 
   rank INT UNIQUE,
   url VARCHAR(128) UNIQUE,
   INDEX(rank)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS top_code;
CREATE TABLE top_code (
   origin INT REFERENCES top_sites.id,
   url TEXT NOT NULL,
   time_crawled BIGINT NOT NULL,
   inline BOOLEAN, 
   code TEXT NOT NULL,
   position INT DEFAULT 0,
   UNIQUE(url(190), position),
   INDEX(time_crawled),
   INDEX(origin)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
