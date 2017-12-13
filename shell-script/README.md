# Script snippets for daily-coding life

Get absolute path in which the script resides

    SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
    echo "We are here in: $SCRIPTDIR"

Delete files older than 10 days

    find ./my_dir -mtime +10 -type f -delete

Export query result to CSV

    mysql -h HOST -u USER -p -D DATABASE -e "select * from table_name" | sed 's/\t/,/g' > export.csv
