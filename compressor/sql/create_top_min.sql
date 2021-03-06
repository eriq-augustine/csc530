CREATE TABLE min_top_code (
   id INTEGER PRIMARY KEY REFERENCES top_code.id,
   minified TEXT NOT NULL,
   hash VARCHAR(128),
   ast TEXT,
   INDEX(hash)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE min_code (
   id INTEGER PRIMARY KEY REFERENCES code.id,
   minified TEXT NOT NULL,
   hash VARCHAR(128),
   ast TEXT,
   INDEX(hash)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
