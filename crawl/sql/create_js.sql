DROP TABLE IF EXISTS domains;
CREATE TABLE domains (
   ip VARCHAR(128) PRIMARY KEY
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS code;
CREATE TABLE code (
   url TEXT NOT NULL,
   domain VARCHAR(128) REFERENCES domains.adderss,
   time_crawled BIGINT NOT NULL,
   inline BOOLEAN DEFAULT FALSE,
   position INT DEFAULT 0,
   code TEXT NOT NULL,
   UNIQUE(url(190), position)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
