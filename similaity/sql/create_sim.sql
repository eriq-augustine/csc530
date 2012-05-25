CREATE TABLE function_sim (
   a_id INTEGER REFERENCES easy_functions.id,
   b_id INTEGER REFERENCES easy_functions.id,
   score DOUBLE NOT NULL,
   UNIQUE(a_id, b_id)
);
