filename = ARGV.shift

count = 0
baseInsert = "INSERT IGNORE INTO top_sites (id, rank, url) VALUES "
insert = baseInsert

file = File.open(filename)
file.each{|line|
   line.strip!
   vals = line.split(',')

   insert += "(NULL, #{vals[0]}, 'http://www.#{vals[1]}'), "

   if (count > 0 && count % 1000 == 0)
      insert.sub!(/, $/, ';')
      puts insert
      insert = baseInsert
   end

   count += 1
}

if (insert != baseInsert)
   insert.sub!(/, $/, ';')
   puts insert
end
