FROM mysql

ENV MYSQL_ROOT_PASSWORD "manager"
ENV MYSQL_DATABASE "emp"


COPY db.sql /docker-entrypoint-initdb.d/

EXPOSE 3306