CREATE TABLE fuzz_run (
   code_id INTEGER REFERENCES easy_functions.id,
   arg_sig VARCHAR(190) NOT NULL,
   result_type VARCHAR(128) NOT NULL,
   result TEXT NOT NULL,
   UNIQUE(code_id, arg_sig)
);
