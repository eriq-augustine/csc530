DROP TABLE IF EXISTS failed_js;
CREATE TABLE failed_js (
   host_ip TEXT NOT NULL,
   orgin_url TEXT NOT NULL,
   js_url TEXT NOT NULL,
   timestamp BIGINT NOT NULL,
   built_url TEXT NOT NULL
);
