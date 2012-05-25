#!/bin/sh

java -cp bin:lib/mysql-connector-java-5.1.15-bin.jar:lib/rhino-1.7R2.jar:lib/yuicompressor-2.4.8pre.jar edu.calpoly.similarity.drivers.CompressDB > out.txt 2> compressed.txt
