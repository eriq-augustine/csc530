JFLAGS=-Xlint -deprecation
INCLUDE_SIM=-cp .:../../similaity/bin

all: clean awkward howAwkward

test: clean compile testDatabase

howAwkward:
	java edu.calpoly.awkward.drivers.awkward

compile:
	find edu -name "*.java" | xargs javac $(JFLAGS)

testDatabase:
	java edu.calpoly.awkward.database.DBConn

clean:
	find edu -name "*.class" | xargs rm -f
