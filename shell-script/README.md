# Script snippets for daily-coding life

- wherearewe.sh, make a script self aware of where it stands

### Find and delete

Delete files older than 10 days

    find ./my_dir -mtime +10 -type f -delete

Export query result to CSV

    mysql -h HOST -u USER -p -D DATABASE -e "select * from table_name" | sed 's/\t/,/g' > export.csv
