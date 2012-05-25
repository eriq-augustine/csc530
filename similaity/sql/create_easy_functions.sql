CREATE TABLE easy_functions (
   id INTEGER PRIMARY KEY AUTO_INCREMENT,
   code_id INTEGER REFERENCES code.id,
   code TEXT,
   num_params INTEGER NOT NULL,
   INDEX(num_params)
);
