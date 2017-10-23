---
permalink: /backend/
---

# Backend

## DB

### MySQL snippets

Export the result of a SQL request to CSV file.

    mysql DB_NAME -h BD_HOST -u BD_USER -p < request.sql | sed 's/\t/,/g' > export.csv
